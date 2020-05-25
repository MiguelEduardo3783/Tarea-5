import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FalcoPageRoutingModule } from './falco-routing.module';

import { FalcoPage } from './falco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FalcoPageRoutingModule
  ],
  declarations: [FalcoPage]
})
export class FalcoPageModule {}
