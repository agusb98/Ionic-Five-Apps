import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Vote } from '../classes/vote';


@Injectable({
  providedIn: 'root'
})

export class VoteService {

  pathOfCollection = 'votes';
  referenceToCollection: AngularFirestoreCollection;

  constructor(private bd: AngularFirestore) {
    this.referenceToCollection = this.bd.collection<Vote>(this.pathOfCollection, ref => ref.orderBy('user', 'asc'));
  }

  public async createOne(vote: Vote) {
    try {
      vote.id = this.bd.createId();
      return this.referenceToCollection.doc(vote.id).set({ ...vote });  //  llaves es objeto, 3 puntitos es dinamico
    }
    catch (error) { }
    return;
  }

  getAll() {
    try {
      return this.referenceToCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => a.payload.doc.data() as Vote))
      );
    }
    catch (error) { }
  }

  getByPic(id: string) {
    try {
      return this.getAll().pipe(
        map(votes => votes.filter(m => m.picId.includes(id))));
    }
    catch (error) { }
  }

  repeatVote(idPic: string, email: string) {
    try {
      return this.getByPic(idPic).pipe(
        map(votes => votes.filter(
          (m: Vote) => m.user.includes(email))
        ));
    }
    catch (error) { }
  }
}