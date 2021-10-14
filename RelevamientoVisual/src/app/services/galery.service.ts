import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Pic } from '../classes/pic';


@Injectable({
  providedIn: 'root'
})

export class GaleryService {

  pathOfCollection = 'galery';
  referenceToCollection: AngularFirestoreCollection;

  constructor(private bd: AngularFirestore) {
    this.referenceToCollection = this.bd.collection<Pic>(this.pathOfCollection, ref => ref.orderBy('date', 'desc'));
  }

  public async createOne(pic: Pic) {
    try {
      pic.id = this.bd.createId();
      return this.referenceToCollection.doc(pic.id).set({ ...pic });  //  llaves es objeto, 3 puntitos es dinamico
    }
    catch (error) { }
    return;
  }

  getAll() {
    try {
      return this.referenceToCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => a.payload.doc.data() as Pic))
      );
    }
    catch (error) { }
  }

  getAllByUser(email: string) {
    try {
      return this.getAll().pipe(
        map(pics => pics.filter(m => m.user.includes(email))));
    }
    catch (error) { }
  }

  getAllByKynd(kynd: string) {
    try {
      return this.getAll().pipe(
        map(pics => pics.filter(m => m.kynd.includes(kynd))));
    }
    catch (error) { }
  }
}