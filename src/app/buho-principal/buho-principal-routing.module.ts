import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuhoPrincipalPage } from './buho-principal.page';

const routes: Routes = [
  {
    path: '',
    component: BuhoPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuhoPrincipalPageRoutingModule {}
