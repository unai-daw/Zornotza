import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuhoFinalPageRoutingModule } from './buho-final-routing.module';

import { BuhoFinalPage } from './buho-final.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuhoFinalPageRoutingModule
  ],
  declarations: [BuhoFinalPage]
})
export class BuhoFinalPageModule {}
