import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndresEspinosaJokuaPageRoutingModule } from './andres-espinosa-jokua-routing.module';

import { AndresEspinosaJokuaPage } from './andres-espinosa-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndresEspinosaJokuaPageRoutingModule
  ],
  declarations: [AndresEspinosaJokuaPage]
})
export class AndresEspinosaJokuaPageModule {}
