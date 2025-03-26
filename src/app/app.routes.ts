import { Route, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard';
import { AboutComponent } from './pages/about';
import { ProfileComponent } from './pages/profile/profile';

// these are "modes" we can put our application in.
const p: Route = {};
export const routes: Routes = [
  // relative to app-component
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
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile').then((p) => p.ProfileComponent),
  },
  {
    path: 'counter',
    data: {
      preload: true,
    },
    loadChildren: () =>
      // load children says two things (by default) - put everything this points to in another javascript file.
      // Also, don't download it until they need it.
      import('./features/counter-lab/counter.routes').then(
        (r) => r.COUNTER_ROUTES,
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
