import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-growth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './growth.component.html',
  styleUrl: './growth.component.scss'
})
export class AboutComponent implements AfterViewInit {

  months: { src: string, alt: string }[] = [];

  birthDate: Date = new Date('2024-08-01'); // 예시 출생일
  monthsSinceBirth: number = Math.floor((new Date().getTime() - this.birthDate.getTime()) / (1000 * 60 * 60 * 24 * 30));
  
  @ViewChildren('photoSection', { read: ElementRef }) photoSections!: QueryList<ElementRef>;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    for (let month = this.monthsSinceBirth - 1; month >= 0; month--) {
      this.months.push({
        src: `${month}months.jpg`,
        alt: `${month}개월 기록`
      });
    }
    this.months.push({ src: 'birth.jpg', alt: '출생 기록' });
  }  

  ngAfterViewInit(): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            this.renderer.addClass(target, 'visible');
          } else {
            this.renderer.removeClass(target, 'visible');
          }
        });
      }, { threshold: 0.5 });

      this.photoSections.forEach(section => observer.observe(section.nativeElement));
    } else {
      // Fallback for older browsers
      this.photoSections.forEach(section => this.renderer.addClass(section.nativeElement, 'visible'));
    }
  }
}
