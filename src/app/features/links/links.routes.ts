import { Routes } from '@angular/router';
import { LinksComponent } from './links';
export const LINKS_ROUTES: Routes = [
  {
    path: '',
    component: LinksComponent,
    children: [],
  },
];
