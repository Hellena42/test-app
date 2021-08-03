import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { ItemsService } from 'src/app/shared/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  items: any;

  constructor(
    private itemsService: ItemsService,
    private popoverCtrl: PopoverController
    ) { }

  ngOnInit() {
    this.items = this.itemsService.getAllItems();
  }

  async openPopover() {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent
    });
    await popover.present();
  }
}
