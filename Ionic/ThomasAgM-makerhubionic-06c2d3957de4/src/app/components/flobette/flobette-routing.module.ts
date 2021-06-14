import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlobetteComponent } from './flobette.component';

const routes: Routes = [{ path: '', component: FlobetteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlobetteRoutingModule { }
