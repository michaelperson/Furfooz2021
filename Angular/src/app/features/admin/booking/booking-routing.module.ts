import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking.component';
import { IndexComponent } from './index/index.component';
import { ParametersComponent } from './parameters/parameters.component';
import { TariffComponent } from './tariff/tariff.component';
import { AddComponent } from './add/add.component';
import { CheckbookingComponent } from './checkbooking/checkbooking.component';

const routes: Routes = [{ path: '', component: BookingComponent, children: [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'parameters', component: ParametersComponent},
  {path: 'tarifs', component: TariffComponent},
  {path: 'add', component: AddComponent},
  {path: 'check', component: CheckbookingComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
