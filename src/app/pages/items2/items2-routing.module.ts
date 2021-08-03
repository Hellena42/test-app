import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Items2Page } from './items2.page';

const routes: Routes = [
  {
    path: '',
    component: Items2Page
  },
  {
    path: ':id',
    loadChildren: () => import('./item2/item2.module').then( m => m.Item2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Items2PageRoutingModule {}
