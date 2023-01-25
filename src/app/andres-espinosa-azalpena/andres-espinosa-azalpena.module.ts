import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndresEspinosaAzalpenaPageRoutingModule } from './andres-espinosa-azalpena-routing.module';

import { AndresEspinosaAzalpenaPage } from './andres-espinosa-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndresEspinosaAzalpenaPageRoutingModule
  ],
  declarations: [AndresEspinosaAzalpenaPage]
})
export class AndresEspinosaAzalpenaPageModule {}
