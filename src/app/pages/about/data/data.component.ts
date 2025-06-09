import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {
  infoItems = [
    { key: 'Age', value: '0 years old' },
    { key: 'Height', value: '74cm' },
    { key: 'Weight', value: '9.6kg' },
    { key: 'Blood Type', value: 'A' },
    { key: 'Favorite Toy', value: 'Sample toy' },
  ];
}
