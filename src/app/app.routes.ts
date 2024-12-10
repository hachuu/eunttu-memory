import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.routes')
      .then(routes => routes.routes)
  },
  { path: '**', component: NotFoundComponent }
];
