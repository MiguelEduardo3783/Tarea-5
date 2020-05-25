import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarthPage } from './marth.page';

const routes: Routes = [
  {
    path: '',
    component: MarthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarthPageRoutingModule {}
