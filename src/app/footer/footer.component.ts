import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  openLink(event: MouseEvent, link: string) {
    event.preventDefault(); // 기본 동작 방지
    window.open(link, '_blank'); // 새 창에서 열기
  }
}
