import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MikelUrdangarinAzalpenaPage } from './mikel-urdangarin-azalpena.page';

const routes: Routes = [
  {
    path: '',
    component: MikelUrdangarinAzalpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MikelUrdangarinAzalpenaPageRoutingModule {}
