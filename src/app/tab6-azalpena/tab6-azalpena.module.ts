import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab6AzalpenaPageRoutingModule } from './tab6-azalpena-routing.module';

import { Tab6AzalpenaPage } from './tab6-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab6AzalpenaPageRoutingModule
  ],
  declarations: [Tab6AzalpenaPage]
})
export class Tab6AzalpenaPageModule {}
