import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  imports: [CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {
  photos = [
    { src: 'recent.jpg', alt: 'Recent Eunttu' },
    { src: 'eunttu.jpg', alt: 'Sample image' }
  ];
}
