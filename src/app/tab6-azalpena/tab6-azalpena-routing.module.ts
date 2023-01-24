import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab6AzalpenaPage } from './tab6-azalpena.page';

const routes: Routes = [
  {
    path: '',
    component: Tab6AzalpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab6AzalpenaPageRoutingModule {}
