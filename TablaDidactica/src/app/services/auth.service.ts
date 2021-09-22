import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public isLogged: any = false;

  constructor(
    public afAuth: AngularFireAuth,
    private toastrService: ToastrService
  ) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }

  //LOGIN
  async login(email: string, password: string) {
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(email, password);
      //this.vibration.vibrate([1000, 500, 1000]);
      this.toastrService.success('Ingreso con Exito', 'Iniciar Sesión');
      return user;
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
      this.toastrService.error('Email/Contraseña Incorrecto', 'Iniciar Sesión');
    }
  }

  //REGISTER
  async register(email: string, password: string) {
    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(email, password);
      //this.vibration.vibrate([1000, 500, 1000]);
      this.toastrService.success('Bienvenido!', 'Registro de Usuario');

      return user;
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
      this.toastrService.error(error.message, 'Registro de Usuario');
    }
  }

  //LOGOUT
  async signout() {
    try {
      await this.afAuth.signOut();
      //this.vibration.vibrate([1000, 500, 1000]);
      this.toastrService.success('Sesión Cerrada con Exito', 'Salir');
    }
    catch (error) {
      //this.vibration.vibrate([1000]);
      this.toastrService.error(error.message, 'Cerrar Sesión');
    }
  }
}
