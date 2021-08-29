import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-danger/auth.guard';
import { AuthBlueGuard } from './guards/auth-blue/auth-blue.guard';
import { AuthLimaGuard } from './guards/auth-lima/auth-lima.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./pages/items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'items2',
    loadChildren: () => import('./pages/items2/items2.module').then( m => m.Items2PageModule)
  },
  {
    path: 'toggle',
    loadChildren: () => import('./pages/toggle/toggle.module').then( m => m.TogglePageModule)
  },
  {
    path: 'danger',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/toggle/danger/danger.module').then( m => m.DangerPageModule)
  },
  {
    path: 'lima', 
    canActivate: [AuthLimaGuard],
    loadChildren: () => import('./pages/toggle/lima/lima.module').then( m => m.LimaPageModule)
  },
  {
    path: 'blue', 
    canActivate: [AuthBlueGuard],
    loadChildren: () => import('./pages/toggle/blue/blue.module').then( m => m.BluePageModule)
  },
  {
    path: 'plugins',
    loadChildren: () => import('./pages/plugins/plugins.module').then( m => m.PluginsPageModule)
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
