import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapmenuPageRoutingModule } from './mapmenu-routing.module';

import { MapmenuPage } from './mapmenu.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapmenuPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [MapmenuPage]
})
export class MapmenuPageModule {}
