import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PluginsPageRoutingModule } from './plugins-routing.module';

import { PluginsPage } from './plugins.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PluginsPageRoutingModule,
    TranslateModule
  ],
  declarations: [PluginsPage]
})
export class PluginsPageModule {}
