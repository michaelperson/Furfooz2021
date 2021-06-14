import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesNinfosRoutingModule } from './prices-ninfos-routing.module';
import { PricesNinfosComponent } from './prices-ninfos.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [PricesNinfosComponent],
  imports: [
    CommonModule,
    PricesNinfosRoutingModule,
    TranslateModule.forChild()
  ]
})
export class PricesNinfosModule { }
