import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanelaPage } from './canela.page';

const routes: Routes = [
  {
    path: '',
    component: CanelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanelaPageRoutingModule {}
