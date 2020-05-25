import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaptainFalconPage } from './captain-falcon.page';

const routes: Routes = [
  {
    path: '',
    component: CaptainFalconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaptainFalconPageRoutingModule {}
