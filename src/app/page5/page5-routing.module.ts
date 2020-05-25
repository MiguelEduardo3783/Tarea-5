import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page5Page } from './page5.page';

const routes: Routes = [
  {
    path: '',
    component: Page5Page
  },
  {
    path: 'joker',
    loadChildren: () => import('./joker/joker.module').then( m => m.JokerPageModule)
  },
  {
    path: 'bayonetta',
    loadChildren: () => import('./bayonetta/bayonetta.module').then( m => m.BayonettaPageModule)
  },
  {
    path: 'canela',
    loadChildren: () => import('./canela/canela.module').then( m => m.CanelaPageModule)
  },
  {
    path: 'cloud',
    loadChildren: () => import('./cloud/cloud.module').then( m => m.CloudPageModule)
  },
  {
    path: 'mega-man',
    loadChildren: () => import('./mega-man/mega-man.module').then( m => m.MegaManPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page5PageRoutingModule {}
