import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Recarga } from '../classes/recarga';

@Injectable({
  providedIn: 'root'
})

export class RecargasService {

  pathOfCollection = '/recargas-qr';
  referenceToCollection: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) { this.referenceToCollection = this.db.collection<Recarga>(this.pathOfCollection, ref => ref.orderBy('date', 'asc')); }

  create(recarga: Recarga) {
    try {
      recarga.id = this.db.createId();
      this.referenceToCollection.doc(recarga.id).set({ ...recarga });
    }
    catch (error) { }
  }

  delete(recarga: Recarga) {
    try {
      this.referenceToCollection.doc(recarga.id).delete();
    }
    catch (error) { }
  }

  set(recarga: Recarga) {
    try {
      this.referenceToCollection.doc(recarga.id).set({ ...recarga });
    }
    catch (error) { }
  }

  getByUser(email: string) {
    try {
      return this.getAll().pipe(
        map(recargas => recargas.filter(
          recarga => recarga.email.includes(email)))
      );
    }
    catch (error) { }
  }

  getAll() {
    try {
      return this.referenceToCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => a.payload.doc.data() as Recarga))
      );
    }
    catch (error) { }
  }

  getByUserAndCode(r: Recarga) {
    try {
      return this.getAll().pipe(
        map(recargas => recargas.filter(
          recarga => recarga.email.includes(r.email),
          recarga => recarga.code.includes(r.code)
        ))
      );
    }
    catch (error) { }
  }
}
