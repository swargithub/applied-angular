import { Routes } from '@angular/router';
import { ListComponent } from './components/list';
import { LinksComponent } from './links';
export const LINKS_ROUTES: Routes = [
  {
    path: '',
    component: LinksComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
