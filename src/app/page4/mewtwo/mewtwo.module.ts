import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MewtwoPageRoutingModule } from './mewtwo-routing.module';

import { MewtwoPage } from './mewtwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MewtwoPageRoutingModule
  ],
  declarations: [MewtwoPage]
})
export class MewtwoPageModule {}
