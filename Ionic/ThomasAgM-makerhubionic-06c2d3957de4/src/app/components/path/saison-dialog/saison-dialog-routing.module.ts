import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaisonDialogPage } from './saison-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: SaisonDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaisonDialogPageRoutingModule {}
