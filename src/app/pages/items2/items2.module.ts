import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Items2PageRoutingModule } from './items2-routing.module';

import { Items2Page } from './items2.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Items2PageRoutingModule,
    TranslateModule
  ],
  declarations: [Items2Page]
})
export class Items2PageModule {}
