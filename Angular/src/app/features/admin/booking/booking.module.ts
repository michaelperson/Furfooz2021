import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexComponent } from './index/index.component';
import { ParametersComponent } from './parameters/parameters.component';
import { TariffComponent } from './tariff/tariff.component';
import { AddComponent } from './add/add.component';
import { CheckbookingComponent } from './checkbooking/checkbooking.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [BookingComponent, IndexComponent, ParametersComponent,TariffComponent, AddComponent, CheckbookingComponent],

  imports: [
    CommonModule,
    SharedModule,
    BookingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ZXingScannerModule
  ],

  providers: [Document]

})
export class BookingModule { }
