import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Photo } from '../shared/interface/photo';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private bd: AngularFirestore, private toastr: ToastrService) { }

  //Sube una o Mas photos
  async add(photo: Photo, pathOfCollection: string) {
    try {
      const result = await this.bd.collection(pathOfCollection).add({ ...photo });  //  llaves es objeto, 3 puntitos es dinamico
      return result;
    }
    catch (error) { this.toastr.error('Problema al Subir Imagen', 'Estado de Subida'); }
    return;
  }

  //Get All pictures saved in firebase
  async getAll() {

  }

  //Get pictures depending of kynd
  getAllByKynd(kynd: string) {
    try {
      switch (kynd) {
        case 'nice': {
          return this.bd.collection<Photo>('list-nice', ref => ref.orderBy('date', 'desc'));
        }
        case 'bad': {
          return this.bd.collection<Photo>('list-bad', ref => ref.orderBy('date', 'desc'));
        }
      }
    } catch (error) { }
  }

}
