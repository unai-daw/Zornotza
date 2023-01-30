import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaraIzaguirreJokua2PageRoutingModule } from './lara-izaguirre-jokua2-routing.module';

import { LaraIzaguirreJokua2Page } from './lara-izaguirre-jokua2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaraIzaguirreJokua2PageRoutingModule
  ],
  declarations: [LaraIzaguirreJokua2Page]
})
export class LaraIzaguirreJokua2PageModule {}
