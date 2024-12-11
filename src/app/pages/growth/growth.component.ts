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
