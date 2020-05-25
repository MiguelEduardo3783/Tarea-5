import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BayonettaPageRoutingModule } from './bayonetta-routing.module';

import { BayonettaPage } from './bayonetta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BayonettaPageRoutingModule
  ],
  declarations: [BayonettaPage]
})
export class BayonettaPageModule {}
