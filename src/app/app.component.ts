import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  active = '';

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home-outline'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'color-palette-outline'
    },
    {
      title: 'Items',
      url: '/items',
      icon: 'document-text-outline'
    },
    {
      title: 'Items2',
      url: '/items2',
      icon: 'planet-outline'
    },
    {
      title: 'Toggle',
      url: '/toggle',
      icon: 'pizza-outline'
    },
    {
      title: 'Danger',
      url: '/danger',
      icon: 'woman'
    },
    {
      title: 'Lima',
      url: '/lima',
      icon: 'star-half'
    },
    {
      title: 'Blue',
      url: '/blue',
      icon: 'rainy'
    }
  ];

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    });
  }

}
