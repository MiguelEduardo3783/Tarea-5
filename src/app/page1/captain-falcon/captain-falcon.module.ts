import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaptainFalconPageRoutingModule } from './captain-falcon-routing.module';

import { CaptainFalconPage } from './captain-falcon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaptainFalconPageRoutingModule
  ],
  declarations: [CaptainFalconPage]
})
export class CaptainFalconPageModule {}
