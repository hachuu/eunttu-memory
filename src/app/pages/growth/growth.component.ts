import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-growth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './growth.component.html',
  styleUrl: './growth.component.scss'
})
export class AboutComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  months = [
    { src: '8months.jpg', alt: '8개월 기록' },
    { src: '7months.jpg', alt: '7개월 기록' },
    { src: '6months.jpg', alt: '6개월 기록' },
    { src: '5months.jpg', alt: '5개월 기록' },
    { src: '4months.jpg', alt: '4개월 기록' },
    { src: '3months.jpg', alt: '3개월 기록' },
    { src: '2months.jpg', alt: '2개월 기록' },
    { src: '1months.jpg', alt: '1개월 기록' },
    { src: '0months.jpg', alt: '0개월 기록' }
  ];

  @HostListener('window:scroll', [])
  onScroll(): void {
    const images = this.el.nativeElement.querySelectorAll('img');

    images.forEach((img: HTMLElement) => {
      const rect = img.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (inView) {
        this.renderer.addClass(img, 'in-view');
      } else {
        this.renderer.removeClass(img, 'in-view');
      }
    });
  }
}
