import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Page } from './page1.page';

const routes: Routes = [
  {
    path: '',
    component: Page1Page
  },
  {
    path: 'pikachu',
    loadChildren: () => import('./pikachu/pikachu.module').then( m => m.PikachuPageModule)
  },
  {
    path: 'kirby',
    loadChildren: () => import('./kirby/kirby.module').then( m => m.KirbyPageModule)
  },
  {
    path: 'fox',
    loadChildren: () => import('./fox/fox.module').then( m => m.FoxPageModule)
  },
  {
    path: 'captain-falcon',
    loadChildren: () => import('./captain-falcon/captain-falcon.module').then( m => m.CaptainFalconPageModule)
  },
  {
    path: 'mario',
    loadChildren: () => import('./mario/mario.module').then( m => m.MarioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1PageRoutingModule {}
