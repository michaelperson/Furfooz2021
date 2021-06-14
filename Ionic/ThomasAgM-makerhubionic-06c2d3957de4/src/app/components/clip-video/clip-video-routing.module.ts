import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipVideoPage } from './clip-video.page';

const routes: Routes = [
  {
    path: '',
    component: ClipVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipVideoPageRoutingModule {}
