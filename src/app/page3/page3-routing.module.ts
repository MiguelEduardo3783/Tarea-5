import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page3Page } from './page3.page';

const routes: Routes = [
  {
    path: '',
    component: Page3Page
  },
  {
    path: 'meta-knight',
    loadChildren: () => import('./meta-knight/meta-knight.module').then( m => m.MetaKnightPageModule)
  },
  {
    path: 'snake',
    loadChildren: () => import('./snake/snake.module').then( m => m.SnakePageModule)
  },
  {
    path: 'king-dedede',
    loadChildren: () => import('./king-dedede/king-dedede.module').then( m => m.KingDededePageModule)
  },
  {
    path: 'toon-link',
    loadChildren: () => import('./toon-link/zelda.module').then( m => m.ZeldaPageModule)
  },
  {
    path: 'ice-climbers',
    loadChildren: () => import('./ice-climbers/ice-climbers.module').then( m => m.IceClimbersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page3PageRoutingModule {}
