import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UdabarriDantzaTaldeaAzalpenaPageRoutingModule } from './udabarri-dantza-taldea-azalpena-routing.module';

import { UdabarriDantzaTaldeaAzalpenaPage } from './udabarri-dantza-taldea-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UdabarriDantzaTaldeaAzalpenaPageRoutingModule
  ],
  declarations: [UdabarriDantzaTaldeaAzalpenaPage]
})
export class UdabarriDantzaTaldeaAzalpenaPageModule {}
