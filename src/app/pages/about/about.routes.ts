import { Routes } from '@angular/router';

import { AboutComponent } from './about.component';

export const routes: Routes = [
  {
    path: '', component: AboutComponent, children: [
      {
        path: '',
        loadComponent: () => import(`./data/data.component`)
          .then(m => m.DataComponent)
      },
      {
        path: 'photos',
        loadComponent: () => import(`./photos/photos.component`)
          .then(m => m.PhotosComponent)
      }
    ]
  },
];