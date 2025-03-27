import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details';
import { ListComponent } from './components/list';
import { LinksComponent } from './links';
import { ReadingListComponent } from './components/reading-list';
export const LINKS_ROUTES: Routes = [
  {
    path: '',
    component: LinksComponent,
    providers: [],
    children: [
      {
        path: 'list',
        component: ListComponent,
        children: [
          {
            path: ':id',
            component: DetailsComponent,
          },
        ],
      },
      {
        path: 'reading-list',
        component: ReadingListComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
