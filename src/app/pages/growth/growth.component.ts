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

  months: { src: string, alt: string }[] = [
    { src: 'birth.jpg', alt: '출생 기록' }
  ];

  birthDate: Date = new Date('2024-08-01'); // 예시 출생일
  monthsSinceBirth: number = Math.floor((new Date().getTime() - this.birthDate.getTime()) / (1000 * 60 * 60 * 24 * 30));
  
  constructor(private el: ElementRef, private renderer: Renderer2) {
    for (let month = this.monthsSinceBirth - 1; month >= 0; month--) {
      this.months.push({
        src: `${month}months.jpg`,
        alt: `${month}개월 기록`
      });
    }
  }  

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
