import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IceClimbersPageRoutingModule } from './ice-climbers-routing.module';

import { IceClimbersPage } from './ice-climbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IceClimbersPageRoutingModule
  ],
  declarations: [IceClimbersPage]
})
export class IceClimbersPageModule {}
