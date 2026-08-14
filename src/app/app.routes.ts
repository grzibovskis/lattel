import { Routes } from '@angular/router';

import { Mobile } from './pages/mobile/mobile';
import { Internet } from './pages/internet/internet';
import { Tv } from './pages/tv/tv';
import { Support } from './pages/support/support';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mobile',
    pathMatch: 'full',
  },
  {
    path: 'mobile',
    component: Mobile,
  },
  {
    path: 'internet',
    component: Internet,
  },
  {
    path: 'tv',
    component: Tv,
  },
  {
    path: 'support',
    component: Support,
  },
  {
    path: '**',
    redirectTo: 'mobile',
  },
];