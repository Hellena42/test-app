import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { Network } from '@capacitor/network';
import { Browser } from '@capacitor/browser';
import { Geolocation } from '@capacitor/geolocation';
import { Share } from '@capacitor/share';


@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.page.html',
  styleUrls: ['./plugins.page.scss'],
})
export class PluginsPage implements OnInit {
  imageElement;
  networkListener;
  networkStatus;
  latitude;
  longitude;

  constructor(public photoService: PhotoService) {
    this.onBrowser();
  }

  ngOnInit() {
    this.getStatus();
  }

  async getStatus() {
    this.networkListener = Network.addListener('networkStatusChange', status => {
      console.log("Network status changed", status);
      this.networkStatus = status;
    });

    this.networkStatus = await Network.getStatus();
  }

  onDestroy() {
    this.networkListener.removeAllListeners();
  }

  async onCamera() {
    this.photoService.addPhoto();
  };

  onBrowser() {
    Browser.addListener('browserPageLoaded', () => {
      console.log("Browser page loaded event");
    });

    Browser.addListener('browserFinished', () => {
      console.log("Browser finished event");
    });
  }

  async openPage() {
    await Browser.open({ toolbarColor: '#ffb2b5', url: 'https://www.google.com.ua/' });
  }  

  getLocation() {
    Geolocation.getCurrentPosition({
      timeout: 1000,
      enableHighAccuracy: true,
      maximumAge: 0
    }).then(res => {
      this.latitude = res.coords.latitude;
      this.longitude = res.coords.longitude;
    }).catch(e => {
      console.log(e);
    })
  }
}
