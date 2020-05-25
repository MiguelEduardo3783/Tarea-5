import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FalcoPage } from './falco.page';

const routes: Routes = [
  {
    path: '',
    component: FalcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FalcoPageRoutingModule {}
