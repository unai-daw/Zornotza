import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmakumeenEspetxeaAzalpenaPageRoutingModule } from './emakumeen-espetxea-azalpena-routing.module';

import { EmakumeenEspetxeaAzalpenaPage } from './emakumeen-espetxea-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmakumeenEspetxeaAzalpenaPageRoutingModule
  ],
  declarations: [EmakumeenEspetxeaAzalpenaPage]
})
export class EmakumeenEspetxeaAzalpenaPageModule {}
