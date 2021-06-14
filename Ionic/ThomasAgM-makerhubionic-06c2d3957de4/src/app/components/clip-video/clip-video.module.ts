import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipVideoPageRoutingModule } from './clip-video-routing.module';

import { ClipVideoPage } from './clip-video.page';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClipVideoPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ClipVideoPage]
})
export class ClipVideoPageModule {}
