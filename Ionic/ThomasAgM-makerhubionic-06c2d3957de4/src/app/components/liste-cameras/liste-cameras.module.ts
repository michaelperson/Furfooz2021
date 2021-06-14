import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeCamerasPageRoutingModule } from './liste-cameras-routing.module';

import { ListeCamerasPage } from './liste-cameras.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeCamerasPageRoutingModule,
    TranslateModule.forChild()

  ],
  declarations: [ListeCamerasPage]
})
export class ListeCamerasPageModule {}
