import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaraIzaguireJokuaPageRoutingModule } from './lara-izaguire-jokua-routing.module';

import { LaraIzaguireJokuaPage } from './lara-izaguire-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaraIzaguireJokuaPageRoutingModule
  ],
  declarations: [LaraIzaguireJokuaPage]
})
export class LaraIzaguireJokuaPageModule {}
