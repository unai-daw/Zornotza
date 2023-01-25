import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaizetaraAzalpenaPage } from './haizetara-azalpena.page';

const routes: Routes = [
  {
    path: '',
    component: HaizetaraAzalpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaizetaraAzalpenaPageRoutingModule {}
