import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAdminGuard } from './core/guards/is-admin.guard';
import { WelcomeComponent } from './shared/start/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {path:'welcome', component:WelcomeComponent},
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }, 
  { path: 'admin', canActivate: [ IsAdminGuard ], loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'public', loadChildren: () => import('./features/public/public.module').then(m => m.PublicModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
