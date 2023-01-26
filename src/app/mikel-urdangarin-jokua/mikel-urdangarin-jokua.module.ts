import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MikelUrdangarinJokuaPageRoutingModule } from './mikel-urdangarin-jokua-routing.module';

import { MikelUrdangarinJokuaPage } from './mikel-urdangarin-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MikelUrdangarinJokuaPageRoutingModule
  ],
  declarations: [MikelUrdangarinJokuaPage]
})
export class MikelUrdangarinJokuaPageModule {}
