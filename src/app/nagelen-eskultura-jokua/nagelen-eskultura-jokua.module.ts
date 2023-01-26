import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NagelenEskulturaJokuaPageRoutingModule } from './nagelen-eskultura-jokua-routing.module';

import { NagelenEskulturaJokuaPage } from './nagelen-eskultura-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NagelenEskulturaJokuaPageRoutingModule
  ],
  declarations: [NagelenEskulturaJokuaPage]
})
export class NagelenEskulturaJokuaPageModule {}
