import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MikelUrdangarinJokuaPage } from './mikel-urdangarin-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: MikelUrdangarinJokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MikelUrdangarinJokuaPageRoutingModule {}
