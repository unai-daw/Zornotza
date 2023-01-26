import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmakumeenEspetxeaJokuaPageRoutingModule } from './emakumeen-espetxea-jokua-routing.module';

import { EmakumeenEspetxeaJokuaPage } from './emakumeen-espetxea-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmakumeenEspetxeaJokuaPageRoutingModule
  ],
  declarations: [EmakumeenEspetxeaJokuaPage]
})
export class EmakumeenEspetxeaJokuaPageModule {}
