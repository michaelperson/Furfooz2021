import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';


import { PathComponent } from './path.component';
import { UpdateComponent } from './update/update.component';
import { UpdateResolver } from './resolver/updateResolver';
import { ListPlantResolver } from './resolver/listePlantResolver';

const routes: Routes = [{ path: '', component: PathComponent, children: [
  {path:'add', component: AddComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent, resolve: { resolveListPlant: ListPlantResolver }},
  { path: 'update/:id', component: UpdateComponent, resolve: { resolvePlant: UpdateResolver } },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathRoutingModule { }
