import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MegaManPage } from './mega-man.page';

const routes: Routes = [
  {
    path: '',
    component: MegaManPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MegaManPageRoutingModule {}
