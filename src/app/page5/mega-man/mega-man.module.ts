import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MegaManPageRoutingModule } from './mega-man-routing.module';

import { MegaManPage } from './mega-man.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MegaManPageRoutingModule
  ],
  declarations: [MegaManPage]
})
export class MegaManPageModule {}
