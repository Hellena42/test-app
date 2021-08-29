import { Injectable } from "@angular/core";

@Injectable ({
  providedIn: 'root'
})

export class ItemsService {
  items: any = [];

  constructor() {
    this.items = [
      {
        id: 1,
        title: 'itemsData.item.0.title',
        imageUrl: 'https://static.boredpanda.com/blog/wp-content/uploads/2021/05/Hey-Pandas-I-dare-you-to-photoshop-this-cat-to-be-the-best-thing-you-an-think-of-609068f451c3c.jpg',
        meds: ['itemsData.item.0.meds.0', 'itemsData.item.0.meds.1', 'itemsData.item.0.meds.2']
      },
      {
        id: 2,
        title: 'itemsData.item.1.title',
        imageUrl: 'https://i0.wp.com/theverybesttop10.com/wp-content/uploads/2013/11/Top-10-Images-of-Cats-Drinking-Wine-0.jpg?resize=600%2C453&ssl=1',
        meds: ['itemsData.item.1.meds.0', 'itemsData.item.1.meds.1', 'itemsData.item.1.meds.2']
      },
      {
        id: 3,
        title: 'itemsData.item.2.title',
        imageUrl: 'https://nypost.com/wp-content/uploads/sites/2/2020/06/angry-cat-82.jpg?quality=80&strip=all&w=1200',
        meds: ['itemsData.item.2.meds.0', 'itemsData.item.2.meds.1', 'itemsData.item.2.meds.2']
      }
    ]
  }

  getAllItems() {
    return [...this.items]
  }

  getItem(id) {
    return {
      ...this.items.find(item => {
        return item.id === id;
      })
    }
}

}