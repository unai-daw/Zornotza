import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab6JokuaPageRoutingModule } from './tab6-jokua-routing.module';

import { Tab6JokuaPage } from './tab6-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab6JokuaPageRoutingModule
  ],
  declarations: [Tab6JokuaPage]
})
export class Tab6JokuaPageModule {}
