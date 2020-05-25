import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoxPageRoutingModule } from './fox-routing.module';

import { FoxPage } from './fox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoxPageRoutingModule
  ],
  declarations: [FoxPage]
})
export class FoxPageModule {}
