import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NagelenEskulturaJokuaPage } from './nagelen-eskultura-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: NagelenEskulturaJokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NagelenEskulturaJokuaPageRoutingModule {}
