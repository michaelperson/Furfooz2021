import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CategoryComponent } from './category/category.component';
import { IndexComponent } from './index/index.component';

import { PointOfInterestsComponent } from './point-of-interests.component';

const routes: Routes = [{ path: '', component: PointOfInterestsComponent, children: [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'add', component: AddComponent },
  { path: 'category', component: CategoryComponent },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointOfInterestsRoutingModule { }
