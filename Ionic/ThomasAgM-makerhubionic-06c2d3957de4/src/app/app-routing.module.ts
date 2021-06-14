import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlantListResolver } from './components/path/resolvers/plant-list.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'sortedpoilist',
    loadChildren: () => import('./components/generics/sortedpoilist/sortedpoilist.module').then( m => m.SortedpoilistPageModule)
  },
  {
    path: 'genericpoi',
    loadChildren: () => import('./components/generics/genericpoi/genericpoi.module').then( m => m.GenericpoiPageModule)
  },
  {
    path: 'mapmenu',
    loadChildren: () => import('./components/generics/mapmenu/mapmenu.module').then( m => m.MapmenuPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./components/settings/settings.module').then( m => m.SettingsPageModule)
  },
  { path: 'mission', loadChildren: () => import('./components/mission/mission.module').then(m => m.MissionModule) },
  {
    path: 'map',
    loadChildren : () => import('./components/map/map.module').then(m => m.MapPageModule)
  },
  { path: 'infos', loadChildren: () => import('./components/prices-ninfos/prices-ninfos.module').then(m => m.PricesNinfosModule) },
  { path: 'flobette', loadChildren: () => import('./components/flobette/flobette.module').then(m => m.FlobetteModule) },
  {
    path: 'plant-list',
    loadChildren: () => import('./components/path/plant-list/plant-list.module').then( m => m.PlantListPageModule),
    resolve:{ 
      resolvePlant : PlantListResolver,
    },
  },
  {
    path: 'saison-dialog',
    loadChildren: () => import('./components/path/saison-dialog/saison-dialog.module').then( m => m.SaisonDialogPageModule)
  },
  {
    path: 'genericpoi',
    loadChildren: () => import('./components/generics/genericpoi/genericpoi.module').then( m => m.GenericpoiPageModule)
  },
  {
    path: 'mapmenu',
    loadChildren: () => import('./components/generics/mapmenu/mapmenu.module').then( m => m.MapmenuPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./components/settings/settings.module').then( m => m.SettingsPageModule)
  },
  { path: 'mission', loadChildren: () => import('./components/mission/mission.module').then(m => m.MissionModule) },
  {
    path: 'map',
    loadChildren : () => import('./components/map/map.module').then(m => m.MapPageModule)
  },
  { path: 'infos', loadChildren: () => import('./components/prices-ninfos/prices-ninfos.module').then(m => m.PricesNinfosModule) },
  { path: 'flobette', loadChildren: () => import('./components/flobette/flobette.module').then(m => m.FlobetteModule) },
  {
    path: 'cameras/:id',
    loadChildren: () => import('./components/cameras/cameras.module').then( m => m.CamerasPageModule)
  },
  {
    path: 'clip-video/:id',
    loadChildren: () => import('./components/clip-video/clip-video.module').then( m => m.ClipVideoPageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./components/shared/path/library/library.module').then( m => m.LibraryPageModule)
  },
  {
    path: 'alert-dialog',
    loadChildren: () => import('./components/path/alert-dialog/alert-dialog.module').then( m => m.AlertDialogPageModule)
  },
  {
    path: 'modalintro',
    loadChildren: () => import('./components/shared/intro/modal-intro/modal-intro.component').then( m => m.ModalIntroComponent)
  },
  {
    path: 'liste-cameras',
    loadChildren: () => import('./components/liste-cameras/liste-cameras.module').then( m => m.ListeCamerasPageModule)
  },
  {
    path: 'intro-page',
    loadChildren: () => import('./components/intro-page/intro-page.module').then( m => m.IntroPagePageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
