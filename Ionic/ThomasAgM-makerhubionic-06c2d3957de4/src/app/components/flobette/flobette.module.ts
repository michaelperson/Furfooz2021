import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlobetteRoutingModule } from './flobette-routing.module';
import { FlobetteComponent } from './flobette.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [FlobetteComponent],
  imports: [
    CommonModule,
    FlobetteRoutingModule,
    TranslateModule.forChild()
  ]
})
export class FlobetteModule { }
