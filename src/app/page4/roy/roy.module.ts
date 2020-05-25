import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoyPageRoutingModule } from './roy-routing.module';

import { RoyPage } from './roy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoyPageRoutingModule
  ],
  declarations: [RoyPage]
})
export class RoyPageModule {}
