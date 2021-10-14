import { Injectable } from '@angular/core';
import firebase from "firebase/compat/app";
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(private db: AngularFireStorage) { }

  public async savePhoto(img, folder) {
    try {
      let path = '/' + folder + '/' + new Date().getTime();
      this.db.ref(path);
      this.db.upload(path, img).then(() => {
        let storages = firebase.storage();
        let storageRef = storages.ref();
        let spaceRef = storageRef.child(path);

        spaceRef.getDownloadURL().then(url => { return url });
      });
    }
    catch (error) { }
    return;
  }
}