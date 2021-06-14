import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SortedpoilistPage } from './sortedpoilist.page';

const routes: Routes = [
  {
    path: '',
    component: SortedpoilistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SortedpoilistPageRoutingModule {}
