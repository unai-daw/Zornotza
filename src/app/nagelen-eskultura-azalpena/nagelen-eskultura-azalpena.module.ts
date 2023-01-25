import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NagelenEskulturaAzalpenaPageRoutingModule } from './nagelen-eskultura-azalpena-routing.module';

import { NagelenEskulturaAzalpenaPage } from './nagelen-eskultura-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NagelenEskulturaAzalpenaPageRoutingModule
  ],
  declarations: [NagelenEskulturaAzalpenaPage]
})
export class NagelenEskulturaAzalpenaPageModule {}
