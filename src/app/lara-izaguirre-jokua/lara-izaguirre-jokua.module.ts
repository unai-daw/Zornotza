import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaraIzaguirreJokuaPageRoutingModule } from './lara-izaguirre-jokua-routing.module';

import { LaraIzaguirreJokuaPage } from './lara-izaguirre-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaraIzaguirreJokuaPageRoutingModule
  ],
  declarations: [LaraIzaguirreJokuaPage]
})
export class LaraIzaguirreJokuaPageModule {}
