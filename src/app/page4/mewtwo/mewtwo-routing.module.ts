import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MewtwoPage } from './mewtwo.page';

const routes: Routes = [
  {
    path: '',
    component: MewtwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MewtwoPageRoutingModule {}
