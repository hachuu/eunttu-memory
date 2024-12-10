import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  pageTogle: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateTo(path: string = ''): void {
    this.pageTogle = !this.pageTogle;
    const paths = ['/', 'photos'];
    this.router.navigate([`./${paths[Number(this.pageTogle)]}`], { relativeTo: this.route });
  }  
}
