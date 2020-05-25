import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page2Page } from './page2.page';

const routes: Routes = [
  {
    path: '',
    component: Page2Page
  },
  {
    path: 'falco',
    loadChildren: () => import('./falco/falco.module').then( m => m.FalcoPageModule)
  },
  {
    path: 'marth',
    loadChildren: () => import('./marth/marth.module').then( m => m.MarthPageModule)
  },
  {
    path: 'sheik',
    loadChildren: () => import('./sheik/sheik.module').then( m => m.SheikPageModule)
  },
  {
    path: 'jigglypuff',
    loadChildren: () => import('./jigglypuff/jigglypuff.module').then( m => m.JigglypuffPageModule)
  },
  {
    path: 'peach',
    loadChildren: () => import('./peach/peach.module').then( m => m.PeachPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page2PageRoutingModule {}
