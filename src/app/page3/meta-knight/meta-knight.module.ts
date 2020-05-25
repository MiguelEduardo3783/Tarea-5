import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetaKnightPageRoutingModule } from './meta-knight-routing.module';

import { MetaKnightPage } from './meta-knight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetaKnightPageRoutingModule
  ],
  declarations: [MetaKnightPage]
})
export class MetaKnightPageModule {}
