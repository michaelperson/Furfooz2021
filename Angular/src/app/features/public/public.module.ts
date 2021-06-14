import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { BookingComponent } from './booking/booking.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PublicComponent, BookingComponent],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule,
    FormsModule
  ]
})
export class PublicModule { }
