import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab7JokuaPageRoutingModule } from './tab7-jokua-routing.module';

import { Tab7JokuaPage } from './tab7-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab7JokuaPageRoutingModule
  ],
  declarations: [Tab7JokuaPage]
})
export class Tab7JokuaPageModule {}
