import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item2PageRoutingModule } from './item2-routing.module';

import { Item2Page } from './item2.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item2PageRoutingModule,
    TranslateModule
  ],
  declarations: [Item2Page]
})
export class Item2PageModule {}
