import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  @Input() listaUsuarios = [{ "id": 1, "email": "admin@admin.com", "password": "111111", "perfil": "admin", "sexo": "femenino", "name": "admin" },
  { "id": 2, "email": "invitado@invitado.com", "password": "222222", "perfil": "invitado", "sexo": "femenino", "name": "invitado" },
  { "id": 3, "email": "usuario@usuario.com", "password": "333333", "perfil": "usuario", "sexo": "masculino", "name": "usuario" },
  { "id": 4, "email": "anonimo@anonimo.com", "password": "444444", "perfil": "usuario", "sexo": "masculino", "name": "anonimo" },
  { "id": 5, "email": "tester@tester.com", "password": "555555", "perfil": "tester", "sexo": "femenino", "name": "tester" }]

  user: User = new User();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  seleccionarUsuario(user) {
    this.user.email = user.email;
    this.user.password = user.password;
  }

  async onLogin() {
    try {
      const user = await this.authService.login(this.user.email, this.user.password);
      if (user) {
        localStorage.setItem('email', this.user.email); //Save user data in the local storage
        /* const isVerified = this.authService.isEmailVerified(user);
        this.redirectUser(isVerified, 'home', 'verify-email'); */
        this.router.navigate(['room']);
      }
    }
    catch (error) { }
  }

  async onRegister() {
    try {
      const user = await this.authService.register(this.user.email, this.user.password);
      if (user) {
        localStorage.setItem('email', this.user.email); //Save user data in the local storage
        this.router.navigate(['/room']);
      }
    }
    catch (error) { }
  }

  /* async onLoginGoogle() {
    try {
      const user = await this.authService.loginGoogle();
      if (user) {
        const isVerified = this.authService.isEmailVerified(user);
        this.redirectUser(isVerified, 'home', 'verify-email');
      }
    }
    catch (error) { }
  }

  async onLoginFacebook() {
    try {
      const user = await this.authService.loginFacebook();
      if (user) {
        const isVerified = this.authService.isEmailVerified(user);
        this.redirectUser(isVerified, 'home', 'verify-email');
      }
    }
    catch (error) { }
  } */

  /**
   * Redirect user depending status 
   * @param isVerified 
   */
  /* redirectUser(isVerified: boolean, truePath: string, falsePath: string): void {
    if (isVerified) { this.router.navigate([truePath]); }
    else { this.router.navigate([falsePath]); }
  } */
}