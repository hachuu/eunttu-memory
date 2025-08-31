import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  features = [
    { title: 'First Word', desc: 'Dad, Mom, Mamma' },
    { title: 'First Steps', desc: 'Two footprints' },
    { title: 'First Birthday', desc: 'The party was a success' },
    { title: 'First Word', desc: 'KKAKKA' },
  ];
}
