import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemsService } from 'src/app/shared/services/items.service';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  receivedItem: any;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.receivedItem = this.itemsService.getItem(+params.id);
    });
  }

  async onShare() {
    await Share.share({
      title: this.receivedItem.title,
      text: "Что делать: " + this.receivedItem.meds,
      url: this.receivedItem.imageUrl,
      dialogTitle: 'Share with buddies',
    });
  }

}
