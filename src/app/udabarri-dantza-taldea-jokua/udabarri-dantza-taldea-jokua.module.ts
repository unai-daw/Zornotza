import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UdabarriDantzaTaldeaJokuaPageRoutingModule } from './udabarri-dantza-taldea-jokua-routing.module';

import { UdabarriDantzaTaldeaJokuaPage } from './udabarri-dantza-taldea-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UdabarriDantzaTaldeaJokuaPageRoutingModule
  ],
  declarations: [UdabarriDantzaTaldeaJokuaPage]
})
export class UdabarriDantzaTaldeaJokuaPageModule {}
