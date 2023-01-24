import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab8AzalpenaPageRoutingModule } from './tab8-azalpena-routing.module';

import { Tab8AzalpenaPage } from './tab8-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab8AzalpenaPageRoutingModule
  ],
  declarations: [Tab8AzalpenaPage]
})
export class Tab8AzalpenaPageModule {}
