import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetaKnightPage } from './meta-knight.page';

const routes: Routes = [
  {
    path: '',
    component: MetaKnightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetaKnightPageRoutingModule {}
