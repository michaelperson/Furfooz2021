import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SortedpoilistPageRoutingModule } from './sortedpoilist-routing.module';

import { SortedpoilistPage } from './sortedpoilist.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SortedpoilistPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [SortedpoilistPage]
})
export class SortedpoilistPageModule {}
