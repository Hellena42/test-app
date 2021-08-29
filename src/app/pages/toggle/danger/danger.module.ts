import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangerPageRoutingModule } from './danger-routing.module';

import { DangerPage } from './danger.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DangerPageRoutingModule,
    TranslateModule
  ],
  declarations: [DangerPage]
})
export class DangerPageModule {}
