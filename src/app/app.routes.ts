import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard';
import { AboutComponent } from './pages/about';

// these are "modes" we can put our application in.

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./features/demos/demos.routes').then((r) => r.DEMO_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
