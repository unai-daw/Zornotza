import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaraIzaguirreJokuaPage } from './lara-izaguirre-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: LaraIzaguirreJokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaraIzaguirreJokuaPageRoutingModule {}
