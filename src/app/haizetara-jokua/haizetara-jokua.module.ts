import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaizetaraJokuaPageRoutingModule } from './haizetara-jokua-routing.module';

import { HaizetaraJokuaPage } from './haizetara-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaizetaraJokuaPageRoutingModule
  ],
  declarations: [HaizetaraJokuaPage]
})
export class HaizetaraJokuaPageModule {}
