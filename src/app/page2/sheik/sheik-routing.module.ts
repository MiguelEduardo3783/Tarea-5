import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheikPage } from './sheik.page';

const routes: Routes = [
  {
    path: '',
    component: SheikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheikPageRoutingModule {}
