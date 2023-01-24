import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab7AzalpenaPage } from './tab7-azalpena.page';

const routes: Routes = [
  {
    path: '',
    component: Tab7AzalpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab7AzalpenaPageRoutingModule {}
