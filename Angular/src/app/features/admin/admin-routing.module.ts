import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent, children: [
  { path: '', redirectTo: 'dashboard' },
  { path: 'point-of-interests', loadChildren: () => import('./point-of-interests/point-of-interests.module').then(m => m.PointOfInterestsModule) },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'path', loadChildren: () => import('./path/path.module').then(m => m.PathModule) },
  { path: 'nest', loadChildren: () => import('./nest/nest.module').then(m => m.NestModule) },
  { path: 'dashboard', loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule) },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
