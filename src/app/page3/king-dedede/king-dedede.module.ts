import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KingDededePageRoutingModule } from './king-dedede-routing.module';

import { KingDededePage } from './king-dedede.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KingDededePageRoutingModule
  ],
  declarations: [KingDededePage]
})
export class KingDededePageModule {}
