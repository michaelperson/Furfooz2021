import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenericpoiPageRoutingModule } from './genericpoi-routing.module';

import { GenericpoiPage } from './genericpoi.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenericpoiPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [GenericpoiPage]
})
export class GenericpoiPageModule {}
