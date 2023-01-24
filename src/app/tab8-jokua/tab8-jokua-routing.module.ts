import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab8JokuaPage } from './tab8-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: Tab8JokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab8JokuaPageRoutingModule {}
