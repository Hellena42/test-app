import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  active = '';

  public appPages = [
    {
      title: 'sidemenu.home',
      url: '/home',
      icon: 'home-outline'
    },
    {
      title: 'sidemenu.about',
      url: '/about',
      icon: 'color-palette-outline'
    },
    {
      title: 'sidemenu.plugins',
      url: '/plugins',
      icon: 'star-half-outline'
    },
    {
      title: 'sidemenu.items',
      url: '/items',
      icon: 'document-text-outline'
    },
    {
      title: 'sidemenu.items2',
      url: '/items2',
      icon: 'planet-outline'
    },
    {
      title: 'sidemenu.toggle',
      url: '/toggle',
      icon: 'pizza-outline'
    },
    {
      title: 'sidemenu.danger',
      url: '/danger',
      icon: 'woman'
    },
    {
      title: 'sidemenu.lima',
      url: '/lima',
      icon: 'star-half'
    },
    {
      title: 'sidemenu.blue',
      url: '/blue',
      icon: 'rainy'
    }
  ];

  public languages = [
    {
      title: 'sidemenu.changeLang',
      open: false,
      children: [
          {
            title: 'ru',
            value: 'ru',
            icon: 'planet-outline'
          },
          {
            title: 'ua',
            value: 'ua',
            icon: 'planet-outline'
          },
          {
            title: 'en',
            value: 'en',
            icon: 'planet-outline'
          },
      ]
    }
  ]
  
  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    });
    this.initializeApp();
  }

  initializeApp() {
    this.translate.setDefaultLang('ru');
  }

  languageChange(lang) {
    this.translate.use(lang);
  }

}
