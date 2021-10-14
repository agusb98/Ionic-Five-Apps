import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('user', email);
      return user;
    }
    catch (error) { }
    return;
  }

  async register(email: string, password: string) {
    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(email, password);
      localStorage.setItem('user', email);
      return user;
    }
    catch (error) { }
    return;
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      localStorage.setItem('user', '');
    }
    catch (error) { }
    return;
  }
}