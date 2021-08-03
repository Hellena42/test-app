import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    ModalComponent
  ],
  providers: [ModalService]
})
export class HomePageModule {}
