import { Routes } from '@angular/router';
import { CounterComponent } from './counter';
import { PrefsComponent } from './pages/prefs';
import { UiComponent } from './pages/ui';
export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: CounterComponent,
    children: [
      {
        path: 'ui', // counter/ui
        component: UiComponent,
      },
      {
        path: 'prefs',
        component: PrefsComponent,
      },
      {
        path: '**',
        redirectTo: 'ui',
      },
    ],
  },
];
