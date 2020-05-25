import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SheikPageRoutingModule } from './sheik-routing.module';

import { SheikPage } from './sheik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SheikPageRoutingModule
  ],
  declarations: [SheikPage]
})
export class SheikPageModule {}
