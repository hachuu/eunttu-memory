import { Routes } from '@angular/router';

import { AboutComponent } from './growth.component';

export const routes: Routes = [
  {
    path: '', component: AboutComponent, children: [
      {
        path: '',
        loadComponent: () => import(`./data/data.component`)
          .then(m => m.DataComponent)
      },
    ]
  },
];