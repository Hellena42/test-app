import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluePageRoutingModule } from './blue-routing.module';

import { BluePage } from './blue.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluePageRoutingModule,
    TranslateModule
  ],
  declarations: [BluePage]
})
export class BluePageModule {}
