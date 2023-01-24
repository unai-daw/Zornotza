import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab7AzalpenaPageRoutingModule } from './tab7-azalpena-routing.module';

import { Tab7AzalpenaPage } from './tab7-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab7AzalpenaPageRoutingModule
  ],
  declarations: [Tab7AzalpenaPage]
})
export class Tab7AzalpenaPageModule {}
