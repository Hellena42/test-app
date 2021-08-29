import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimaPageRoutingModule } from './lima-routing.module';

import { LimaPage } from './lima.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimaPageRoutingModule,
    TranslateModule
  ],
  declarations: [LimaPage]
})
export class LimaPageModule {}
