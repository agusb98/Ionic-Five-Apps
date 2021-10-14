import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('user', email); //Save user data in the local storage
      return user;
    }
    catch (error) { }
    return;
  }

  async register(email: string, password: string) {
    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(email, password);
      localStorage.setItem('user', email); //Save user data in the local storage
      return user;
    }
    catch (error) { }
    return;
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      localStorage.setItem('user', ''); //Save user data in the local storage
    }
    catch (error) { }
    return;
  }

  async getCurrentuser() {
    try { return this.afAuth.authState.pipe(first()).toPromise(); }
    catch (error) { }
    return;
  }
}