
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first } from 'rxjs/operators';
import { User } from '../classes/user';
import { ToastrService } from 'ngx-toastr';
//import { Vibration } from '@ionic-native/vibration/ngx';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private toastr: ToastrService,
    //private vibration: Vibration
  ) { }

  async login(email: string, password: string) {
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.toastr.success('Ingreso con éxito', 'Ingresar Sesión');
      //this.vibration.vibrate([1000, 500, 1000]);
      return user;
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
      this.toastr.error('Correo/Contraseña incorrecto', 'Ingresar Sesión');
    }
    return;
  }

  async register(email: string, password: string) {
    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.toastr.success('Registrado con éxito', 'Registrarse');
      //this.vibration.vibrate([1000, 500, 1000]);
      return user;
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
      this.toastr.error(error, 'Registrarse');
    }
    return;
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.toastr.success('Salida con éxito', 'Cerrar Sesión');
      //this.vibration.vibrate([1000, 500, 1000]);
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
      this.toastr.error('Cerrar Sesión', error);
    }
    return;
  }

  async getCurrentuser() {
    try { return this.afAuth.authState.pipe(first()).toPromise(); }
    catch (error) { }
    return;
  }
}