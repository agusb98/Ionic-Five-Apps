import { Injectable } from '@angular/core';
import { Message } from '../shared/message';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  pathOfCollection = 'conversando';
  referenceToCollection: AngularFirestoreCollection;

  constructor(private bd: AngularFirestore, private toastr: ToastrService) {
    this.referenceToCollection = this.bd.collection<Message>(this.pathOfCollection, ref => ref.orderBy('time', 'asc'));
  }

  public async createOne(message: Message) {
    try {
      const result = await this.referenceToCollection.add({ ...message });  //  llaves es objeto, 3 puntitos es dinamico
      return result;
    }
    catch (error) { this.toastr.error('Problema al Enviar Mensaje', 'Estado del Mensaje'); }
    return;
  }

  public checkMessage(message: Message): boolean {
    if (message.message.length < 1 || message.message.length > 22) {
      this.toastr.error('Numero de caratéres invalido: solo entre (1 y 21)', 'Estado del Mensaje');
      return false;
    }
    return true;
  }

  getAll() {
    try {
      return this.referenceToCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => a.payload.doc.data() as Message))
      );
    }
    catch (error) { this.toastr.error('Error at the moment to get turnos..', 'Data turnos'); }
  }

  getAllByClass(className: string) {
    try {
      switch (className) {
        case '4A': {
          return this.getAll().pipe(
            map(messages => messages.filter(
              m => m.class.includes(className)))
          );
        }
        case '4B': {
          return this.getAll().pipe(
            map(messages => messages.filter(
              m => m.class.includes(className)))
          );
        }
      }
    } catch (error) { }
  }
}