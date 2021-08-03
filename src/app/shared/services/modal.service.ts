import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalComponent } from "src/app/components/modal/modal.component";

@Injectable ({
  providedIn: 'root'
})

export class ModalService {

  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });

    return await modal.present();
  }
}