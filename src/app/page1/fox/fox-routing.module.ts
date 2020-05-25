import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoxPage } from './fox.page';

const routes: Routes = [
  {
    path: '',
    component: FoxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoxPageRoutingModule {}
