import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

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
    data: {
      name: 'danger'
    },
    loadChildren: () => import('./pages/toggle/danger/danger.module').then( m => m.DangerPageModule)
  },
  {
    path: 'lima',
    canActivate: [AuthGuard],
    data: {
      name: 'lima'
    },
    loadChildren: () => import('./pages/toggle/lima/lima.module').then( m => m.LimaPageModule)
  },
  {
    path: 'blue',
    canActivate: [AuthGuard],
    data: {
      name: 'blue'
    },
    loadChildren: () => import('./pages/toggle/blue/blue.module').then( m => m.BluePageModule)
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
