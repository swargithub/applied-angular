import { Routes } from '@angular/router';

import { SignalsDemoComponent } from './pages/signals';
import { DemosComponent } from './demos';
import { ServiceExampleComponent } from './pages/service-example';
import { NameService } from './services/name';
export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemosComponent,
    //providers: [NameService], // create this when ever any of the children below need this, but keep it around for ever after that.
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
