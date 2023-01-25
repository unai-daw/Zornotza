import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MikelUrdangarinAzalpenaPageRoutingModule } from './mikel-urdangarin-azalpena-routing.module';

import { MikelUrdangarinAzalpenaPage } from './mikel-urdangarin-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MikelUrdangarinAzalpenaPageRoutingModule
  ],
  declarations: [MikelUrdangarinAzalpenaPage]
})
export class MikelUrdangarinAzalpenaPageModule {}
