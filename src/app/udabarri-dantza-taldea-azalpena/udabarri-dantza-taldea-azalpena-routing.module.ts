import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UdabarriDantzaTaldeaAzalpenaPage } from './udabarri-dantza-taldea-azalpena.page';

const routes: Routes = [
  {
    path: '',
    component: UdabarriDantzaTaldeaAzalpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UdabarriDantzaTaldeaAzalpenaPageRoutingModule {}
