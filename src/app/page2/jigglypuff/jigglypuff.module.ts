import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JigglypuffPageRoutingModule } from './jigglypuff-routing.module';

import { JigglypuffPage } from './jigglypuff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JigglypuffPageRoutingModule
  ],
  declarations: [JigglypuffPage]
})
export class JigglypuffPageModule {}
