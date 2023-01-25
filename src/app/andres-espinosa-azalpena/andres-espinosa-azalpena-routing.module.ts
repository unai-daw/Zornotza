import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndresEspinosaAzalpenaPage } from './andres-espinosa-azalpena.page';

const routes: Routes = [
  {
    path: '',
    component: AndresEspinosaAzalpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndresEspinosaAzalpenaPageRoutingModule {}
