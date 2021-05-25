
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

  public user: User;

  constructor(
    public afAuth: AngularFireAuth,
    // private toastrService: ToastrService,
    //private vibration: Vibration
  ) { }

  async login(email: string, password: string) {
    try {
      const user = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.isLogged = true;
      //this.vibration.vibrate([1000, 500, 1000]);
      // this.toastrService.success('Ingreso con Exito', 'Iniciar Sesión');
      return user;
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
      // this.toastrService.error('Email/Contraseña Incorrecto', 'Iniciar Sesión');
    }
    return;
  }

  async register(email: string, password: string) {
    try {
      const user = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.isLogged = true;
      //this.vibration.vibrate([1000, 500, 1000]);
      // this.toastrService.success('Bienvenido!', 'Registro de Usuario');
      return user;
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
      // this.toastrService.error(error.message, 'Registro de Usuario');
    }
    return;
  }

  async logout() {
    try {
      await this.afAuth.auth.signOut();
      this.isLogged = false;
      //this.vibration.vibrate([1000, 500, 1000]);
      // this.toastrService.success('Sesión Cerrada con Exito', 'Salir');
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
      // this.toastrService.error(error.message, 'Cerrar Sesión');
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
}