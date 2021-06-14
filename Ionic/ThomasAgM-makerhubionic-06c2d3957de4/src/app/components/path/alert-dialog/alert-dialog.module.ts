import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertDialogPageRoutingModule } from './alert-dialog-routing.module';

import { AlertDialogPage } from './alert-dialog.page';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertDialogPageRoutingModule,
    MatDialogModule,
    TranslateModule.forChild()
  ],
  declarations: [AlertDialogPage],
  
})
export class AlertDialogPageModule {}
