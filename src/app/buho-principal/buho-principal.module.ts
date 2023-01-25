import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuhoPrincipalPageRoutingModule } from './buho-principal-routing.module';

import { BuhoPrincipalPage } from './buho-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuhoPrincipalPageRoutingModule
  ],
  declarations: [BuhoPrincipalPage]
})
export class BuhoPrincipalPageModule {}
