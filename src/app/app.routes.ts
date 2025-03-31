import { Route, Routes } from '@angular/router';
import { AboutComponent } from './pages/about';
import { DashboardComponent } from './pages/dashboard';

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
    path: 'links',
    loadChildren: () =>
      import('./features/links/links.routes').then((m) => m.LINKS_ROUTES),
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./features/demos/demos.routes').then((r) => r.DEMO_ROUTES),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./features/books/books.routes').then((r) => r.BOOK_ROUTES),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile').then((p) => p.ProfileComponent),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./features/counter-lab-final/counter.routes').then(
        (r) => r.COUNTER_ROUTES,
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
