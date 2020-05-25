import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KingDededePage } from './king-dedede.page';

const routes: Routes = [
  {
    path: '',
    component: KingDededePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KingDededePageRoutingModule {}
