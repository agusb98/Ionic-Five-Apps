import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { VibrateOptions } from '@capacitor/haptics';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { Recarga } from '../classes/recarga';
import { User } from '../classes/user';
//import { Vibration } from '@ionic-native/vibration/ngx';

@Injectable({
  providedIn: 'root'
})

export class RecargasService {

  pathOfCollection = '/recargas-qr';
  referenceToCollection: AngularFirestoreCollection;

  constructor(
    private db: AngularFirestore,
    private toastr: ToastrService,
    //private vibration: Vibration
  ) {
    this.referenceToCollection = this.db.collection<Recarga>(this.pathOfCollection, ref => ref.orderBy('date', 'asc'));
  }

  create(recarga: Recarga) {
    try {
      recarga.id = this.db.createId();
      this.referenceToCollection.doc(recarga.id).set({ ...recarga });
      this.toastr.success('Operación realizada con éxito', 'Recarga QR');
    }
    catch (error) { this.toastr.error(error, 'Recarga QR'); }
  }

  delete(recarga: Recarga) {
    try {
      console.log(recarga.id);

      this.referenceToCollection.doc(recarga.id).delete();
      this.toastr.success('Recargas eliminadas con éxito', 'Eliminar');
    }
    catch (error) { this.toastr.error(error, 'Eliminar'); }
  }

  set(recarga: Recarga) {
    try {
      this.referenceToCollection.doc(recarga.id).set({ ...recarga });
      this.toastr.success('Recarga modificada con éxito', 'Modificar');
    }
    catch (error) { this.toastr.error(error, 'Modificar'); }
  }

  getByUser(email: string) {
    try {
      return this.getAll().pipe(
        map(recargas => recargas.filter(
          recarga => recarga.email.includes(email)))
      );
    }
    catch (error) { this.toastr.error('Error al momento de obtener datos..', 'Recargas'); }
  }

  getAll() {
    try {
      return this.referenceToCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => a.payload.doc.data() as Recarga))
      );
    }
    catch (error) { this.toastr.error('Error al momento de obtener datos..', 'Recargas'); }
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
