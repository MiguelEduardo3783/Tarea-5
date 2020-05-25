import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RichterBelmontPage } from './richter-belmont.page';

const routes: Routes = [
  {
    path: '',
    component: RichterBelmontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RichterBelmontPageRoutingModule {}
