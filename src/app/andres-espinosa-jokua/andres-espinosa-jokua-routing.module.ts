import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndresEspinosaJokuaPage } from './andres-espinosa-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: AndresEspinosaJokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndresEspinosaJokuaPageRoutingModule {}
