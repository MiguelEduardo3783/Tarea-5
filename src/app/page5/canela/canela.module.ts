import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanelaPageRoutingModule } from './canela-routing.module';

import { CanelaPage } from './canela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanelaPageRoutingModule
  ],
  declarations: [CanelaPage]
})
export class CanelaPageModule {}
