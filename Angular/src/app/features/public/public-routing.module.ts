import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';

import { PublicComponent } from './public.component';

const routes: Routes = [{ path: '', component: PublicComponent, children: [
  { path: 'booking', component: BookingComponent }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
