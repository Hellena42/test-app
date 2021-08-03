import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BluePage } from './blue/blue.page';
import { DangerPage } from './danger/danger.page';
import { LimaPage } from './lima/lima.page';

import { TogglePage } from './toggle.page';

const routes: Routes = [
  {
    path: '',
    component: TogglePage,
    // children: [
    //   {
    //     path: 'danger', 
    //     component: DangerPage,
    //     data: [{
    //       name: 'danger'
    //     }]
    //   },
    //   {
    //     path: 'lima', 
    //     component: LimaPage,
    //     data: [{
    //       name: 'lima'
    //     }]
    //   },
    //   {
    //     path: 'blue', 
    //     component: BluePage,
    //     data: [{
    //       name: 'blue'
    //     }]
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TogglePageRoutingModule {}
