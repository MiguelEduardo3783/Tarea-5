import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LucinaPageRoutingModule } from './lucina-routing.module';

import { LucinaPage } from './lucina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LucinaPageRoutingModule
  ],
  declarations: [LucinaPage]
})
export class LucinaPageModule {}
