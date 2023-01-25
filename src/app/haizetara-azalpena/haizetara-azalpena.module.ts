import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaizetaraAzalpenaPageRoutingModule } from './haizetara-azalpena-routing.module';

import { HaizetaraAzalpenaPage } from './haizetara-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaizetaraAzalpenaPageRoutingModule
  ],
  declarations: [HaizetaraAzalpenaPage]
})
export class HaizetaraAzalpenaPageModule {}
