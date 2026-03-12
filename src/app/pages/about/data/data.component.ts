import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {
  infoItems = [
    { key: 'Age', value: '1 years old' },
    { key: 'Height', value: '83cm' },
    { key: 'Weight', value: '11kg' },
    { key: 'Blood Type', value: 'A' },
    { key: 'Likes', value: 'Mom, Dad, Halmi, Bus, Doll' },
    { key: 'Dislikes', value: 'Sleep alone' },
    { key: 'Hobbies', value: 'Playing with his parents, Reading, Dancing' },
    { key: 'Skills', value: 'Aegyo, Crawling, Jumping' }
  ];
}
