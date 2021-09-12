
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { User } from '../clases/user';
// import { ToastrService } from 'ngx-toastr';
//import { Vibration } from '@ionic-native/vibration/ngx';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;
  public currentUser: any;

  constructor(
    public afAuth: AngularFireAuth,
    //private vibration: Vibration
  ) { }

  async login(email: string, password: string) {
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('password', password);
      this.isLogged = true;
      //this.vibration.vibrate([1000, 500, 1000]);
      return user;
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
    }
    return;
  }

  async register(email: string, password: string) {
    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.isLogged = true;
      //this.vibration.vibrate([1000, 500, 1000]);
      return user;
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
    }
    return;
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.isLogged = false;
      localStorage.setItem('password', null);
      //this.vibration.vibrate([1000, 500, 1000]);
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
    }
    return;
  }

  async getCurrentuser() {
    try {
      return this.afAuth.authState.pipe(first()).toPromise();
    }
    catch (error) { }
    return;
  }

  public userLoggedIn() {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) { return true }
      else { return false; }
    })
  }
}