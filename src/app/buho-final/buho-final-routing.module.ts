import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuhoFinalPage } from './buho-final.page';

const routes: Routes = [
  {
    path: '',
    component: BuhoFinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuhoFinalPageRoutingModule {}
