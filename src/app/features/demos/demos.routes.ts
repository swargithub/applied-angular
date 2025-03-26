import { Routes } from '@angular/router';

import { DemosComponent } from './demos';
import { ServiceExampleComponent } from './pages/service-example';
import { SignalsDemoComponent } from './pages/signals';
export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemosComponent,

    children: [
      {
        path: 'signals',
        component: SignalsDemoComponent,
      },
      {
        path: 'services',
        component: ServiceExampleComponent,
      },
    ],
  },
];
