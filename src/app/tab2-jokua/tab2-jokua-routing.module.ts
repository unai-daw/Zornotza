import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2JokuaPage } from './tab2-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2JokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2JokuaPageRoutingModule {}
