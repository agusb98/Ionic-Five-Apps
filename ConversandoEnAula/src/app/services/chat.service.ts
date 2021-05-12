import { Injectable } from '@angular/core';
import { Message } from '../shared/message';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private bd: AngularFirestore, private toastr: ToastrService) { }

  public async createOne(message: Message, pathOfCollection: string) {
    try {
      const result = await this.bd.collection(pathOfCollection).add({ ...message });  //  llaves es objeto, 3 puntitos es dinamico
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

  getAllByClass(className: string) {
    try {
      switch (className) {
        case '4A': {
          return this.bd.collection<Message>('chat-4A', ref => ref.orderBy('time', 'asc'));
        }
        case '4B': {
          return this.bd.collection<Message>('chat-4B', ref => ref.orderBy('time', 'asc'));
          break;
        }
      }
    } catch (error) {}
  }
}