import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SaisonDialogPageRoutingModule } from './saison-dialog-routing.module';
import { SaisonDialogPage } from './saison-dialog.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaisonDialogPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [SaisonDialogPage]
})
export class SaisonDialogPageModule {}
