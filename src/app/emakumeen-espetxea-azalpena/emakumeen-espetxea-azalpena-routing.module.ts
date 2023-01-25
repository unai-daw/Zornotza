import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmakumeenEspetxeaAzalpenaPage } from './emakumeen-espetxea-azalpena.page';

const routes: Routes = [
  {
    path: '',
    component: EmakumeenEspetxeaAzalpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmakumeenEspetxeaAzalpenaPageRoutingModule {}
