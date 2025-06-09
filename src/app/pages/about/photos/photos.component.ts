import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  imports: [],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {
  photos = [
    { src: 'recent.jpg', alt: 'Recent Eunttu' },
    { src: 'eunttu.jpg', alt: 'Sample image' }
  ];
}
