import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeCamerasPage } from './liste-cameras.page';

const routes: Routes = [
  {
    path: '',
    component: ListeCamerasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeCamerasPageRoutingModule {}
