import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericpoiPage } from './genericpoi.page';

const routes: Routes = [
  {
    path: '',
    component: GenericpoiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenericpoiPageRoutingModule {}
