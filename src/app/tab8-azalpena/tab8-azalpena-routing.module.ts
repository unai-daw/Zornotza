import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab8AzalpenaPage } from './tab8-azalpena.page';

const routes: Routes = [
  {
    path: '',
    component: Tab8AzalpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab8AzalpenaPageRoutingModule {}
