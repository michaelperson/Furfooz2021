import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapmenuPage } from './mapmenu.page';

const routes: Routes = [
  {
    path: '',
    component: MapmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapmenuPageRoutingModule {}
