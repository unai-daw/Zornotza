import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab6JokuaPage } from './tab6-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: Tab6JokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab6JokuaPageRoutingModule {}
