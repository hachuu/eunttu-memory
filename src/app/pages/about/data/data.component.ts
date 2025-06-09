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
    { key: 'Age', value: '0 years old' },
    { key: 'Height', value: '74cm' },
    { key: 'Weight', value: '9.6kg' },
    { key: 'Blood Type', value: 'A' },
    { key: 'Likes', value: 'Mom, Dad, Milk, Playing' },
    { key: 'Dislikes', value: 'Given and taken away' },
    { key: 'Hobbies', value: 'Playing with his parents' },
    { key: 'Skills', value: 'Crawling, Standing, Jumping' }
  ];
}
