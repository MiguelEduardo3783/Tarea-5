import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarthPageRoutingModule } from './marth-routing.module';

import { MarthPage } from './marth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarthPageRoutingModule
  ],
  declarations: [MarthPage]
})
export class MarthPageModule {}
