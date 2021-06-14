import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantListPageRoutingModule } from './plant-list-routing.module';

import { PlantListPage } from './plant-list.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantListPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [PlantListPage],
  providers:[Geolocation]
})
export class PlantListPageModule {}
