import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import {MapPageRoutingModule} from '../map/map-routing.module'

import { MapPage } from './map.page';
import { TranslateModule } from '@ngx-translate/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [MapPage],
  providers:[Geolocation]
})

export class MapPageModule {}
