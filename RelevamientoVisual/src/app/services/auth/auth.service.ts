import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
//import { Vibration } from '@ionic-native/vibration/ngx';

import { User } from 'src/app/shared/interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: any;

  constructor(
    public afAuth: AngularFireAuth,
    private toastrService: ToastrService,
    //private vibration: Vibration
  ) { }

  async login(email: string, password: string) {
    try {
      this.user = await this.afAuth.signInWithEmailAndPassword(email, password);
      //this.vibration.vibrate([1000, 500, 1000]);
      this.toastrService.success('Ingreso con Exito', 'Iniciar Sesión');
      return this.user;
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
      this.toastrService.error('Email/Contraseña Incorrecto', 'Iniciar Sesión');
    }
    return;
  }

  async register(email: string, password: string) {
    try {
      this.user = await this.afAuth.createUserWithEmailAndPassword(email, password);
      //this.vibration.vibrate([1000, 500, 1000]);
      this.toastrService.success('Bienvenido!', 'Registro de Usuario');
      return this.user;
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
      this.toastrService.error(error.message, 'Registro de Usuario');
    }
    return;
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      //this.vibration.vibrate([1000, 500, 1000]);
      this.toastrService.success('Sesión Cerrada con Exito', 'Salir');
      this.user = null;
    }
    catch (error) { 
      //this.vibration.vibrate([1000]);
      this.toastrService.error(error.message, 'Cerrar Sesión'); }
    return;
  }

  async getCurrentuser() {
    try {
      return this.afAuth.authState.pipe(first()).toPromise();
    }
    catch (error) { }
    return;
  }
}