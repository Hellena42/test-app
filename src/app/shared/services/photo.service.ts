import { Injectable } from "@angular/core";
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

interface NewPhoto {
  filepath: string;
  webviewPath: string;
}

@Injectable ({
  providedIn: 'root'
})

export class PhotoService {
  public photos: NewPhoto[] = [];

  public async addPhoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }

}