import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page4Page } from './page4.page';

const routes: Routes = [
  {
    path: '',
    component: Page4Page
  },
  {
    path: 'lucina',
    loadChildren: () => import('./lucina/lucina.module').then( m => m.LucinaPageModule)
  },
  {
    path: 'richter-belmont',
    loadChildren: () => import('./richter-belmont/richter-belmont.module').then( m => m.RichterBelmontPageModule)
  },
  {
    path: 'roy',
    loadChildren: () => import('./roy/roy.module').then( m => m.RoyPageModule)
  },
  {
    path: 'wario',
    loadChildren: () => import('./wario/wario.module').then( m => m.WarioPageModule)
  },
  {
    path: 'mewtwo',
    loadChildren: () => import('./mewtwo/mewtwo.module').then( m => m.MewtwoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page4PageRoutingModule {}
