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
        title: 'Страдалец',
        imageUrl: 'https://static.boredpanda.com/blog/wp-content/uploads/2021/05/Hey-Pandas-I-dare-you-to-photoshop-this-cat-to-be-the-best-thing-you-an-think-of-609068f451c3c.jpg',
        meds: ['дать пожрать', 'почесать за ушком', 'помирать вместе']
      },
      {
        id: 2,
        title: 'Сомелье',
        imageUrl: 'https://i0.wp.com/theverybesttop10.com/wp-content/uploads/2013/11/Top-10-Images-of-Cats-Drinking-Wine-0.jpg?resize=600%2C453&ssl=1',
        meds: ['налить молочко', 'открыть еще', 'посидеть вместе']
      },
      {
        id: 3,
        title: 'Необиженная женщина',
        imageUrl: 'https://nypost.com/wp-content/uploads/sites/2/2020/06/angry-cat-82.jpg?quality=80&strip=all&w=1200',
        meds: ['сбежать', 'застрелиться', 'уйти к сомелье']
      }
    ]
  }

  getAllItems() {
    return [...this.items]
  }

  getItem(id) {
    return {
      ...this.items.find(item => {
        console.log('item', item);
        console.log('itemId', item.id);
        console.log('id', id);
        return item.id === id;
      })
    }
}

}