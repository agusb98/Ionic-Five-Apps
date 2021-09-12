import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  show = false;
  @Input() user: User = new User();
  @Input() users = [{ "id": 1, "email": "admin@admin.com", "password": "111111", "perfil": "admin", "sexo": "femenino" },
  { "id": 2, "email": "invitado@invitado.com", "password": "222222", "perfil": "invitado", "sexo": "femenino" },
  { "id": 3, "email": "usuario@usuario.com", "password": "333333", "perfil": "usuario", "sexo": "masculino" },
  { "id": 4, "email": "anonimo@anonimo.com", "password": "444444", "perfil": "anonimo", "sexo": "masculino" },
  { "id": 5, "email": "tester@tester.com", "password": "555555", "perfil": "tester", "sexo": "femenino" }]

  constructor(
    private authService: AuthService,
    private toast: ToastService,
    private router: Router
  ) { }

  seleccionarUsuario(usuario) {
    this.user.email = usuario.email;
    this.user.password = usuario.password;
  }

  async onRegister() {
    const response = await this.authService.register(this.user.email, this.user.password);
    if (response) {
      this.authService.currentUser = this.user;
      this.toast.presentToast("Registro de Usuario", "Registro Exitoso", 3000, "success");
      this.router.navigate(['/']);
    }
    else {
      this.toast.presentToast("Registro de Usuario", "Los datos no son validos, intenta de nuevo", 3000, "danger");
    }
  }


  async onLogin() {
    const response = await this.authService.login(this.user.email, this.user.password);
    if (response) {
      this.authService.currentUser = this.user;
      this.toast.presentToast("Ingresar Sesión", "Ingreso Exitoso", 3000, "success");
      this.router.navigate(['/']);
    }
    else { this.notificateError(); }
  }

  notificateError() {
    let doc = document.getElementById('password');
    doc.classList.remove('wobble-hor-bottom');
    doc.classList.add('wobble-hor-bottom');

    this.toast.presentToast("Ingresar Sesión", "Los datos no son validos, intenta de nuevo", 3000, "danger");
  }

  correctData(): boolean {
    if (this.user.email && this.user.password) {
      return this.user.email && this.user.password.length >= 6;
    }
    return false;
  }

  quickLog(user: User) {
    this.user = user;
  }

  showUsers() {
    this.show = true;
  }
}
