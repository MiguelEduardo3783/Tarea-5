import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IceClimbersPage } from './ice-climbers.page';

const routes: Routes = [
  {
    path: '',
    component: IceClimbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IceClimbersPageRoutingModule {}
