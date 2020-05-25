import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RichterBelmontPageRoutingModule } from './richter-belmont-routing.module';

import { RichterBelmontPage } from './richter-belmont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RichterBelmontPageRoutingModule
  ],
  declarations: [RichterBelmontPage]
})
export class RichterBelmontPageModule {}
