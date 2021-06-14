import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PricesNinfosComponent } from './prices-ninfos.component';

const routes: Routes = [{ path: '', component: PricesNinfosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricesNinfosRoutingModule { }
