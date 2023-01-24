import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab8JokuaPageRoutingModule } from './tab8-jokua-routing.module';

import { Tab8JokuaPage } from './tab8-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab8JokuaPageRoutingModule
  ],
  declarations: [Tab8JokuaPage]
})
export class Tab8JokuaPageModule {}
