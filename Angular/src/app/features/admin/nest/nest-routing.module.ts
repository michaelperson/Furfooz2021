import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClipVideoComponent } from './clip-video/clip-video.component';

import { NestComponent } from './nest.component';

const routes: Routes = [{ path: '', component: NestComponent},
                        {path:'clipVideo/:id',component:ClipVideoComponent} ,
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestRoutingModule { }
