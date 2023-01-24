import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab7JokuaPage } from './tab7-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: Tab7JokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab7JokuaPageRoutingModule {}
