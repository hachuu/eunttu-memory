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
    { title: 'First Words', desc: 'Halmi, Halbi, KKOMO, DDAMCHUN' },
    { title: 'First Steps', desc: 'Two footprints' },
    { title: 'First Birthday', desc: 'The party was a success' },
    { title: 'First Sentence', desc: 'KKAKKA JJiJeoJeo' },
    { title: 'First Time', desc: 'Riding a bus' },
    { title: 'First Jump', desc: 'Dancing to the music' }
  ];
}
