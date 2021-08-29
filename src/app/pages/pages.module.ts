import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutPageModule } from './about/about.module';
import { HomePageModule } from './home/home.module';
import { ItemPageModule } from './items/item/item.module';
import { ItemsPageModule } from './items/items.module';
import { Item2PageModule } from './items2/item2/item2.module';
import { Items2PageModule } from './items2/items2.module';
import { LoginPageModule } from './login/login.module';
import { PluginsPageModule } from './plugins/plugins.module';
import { TogglePageModule } from './toggle/toggle.module';
import { AboutPage } from './about/about.page';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    HomePageModule,
    ItemsPageModule,
    ItemPageModule,
    Items2PageModule,
    Item2PageModule,
    LoginPageModule,
    PluginsPageModule,
    TogglePageModule
  ],
  declarations: [

  ],
  providers: [],
  exports:[
    TranslateModule,

    HomePageModule,
    ItemsPageModule,
    ItemPageModule,
    Items2PageModule,
    Item2PageModule,
    LoginPageModule,
    PluginsPageModule,
    TogglePageModule
  ],
})
export class PagesModule {}
