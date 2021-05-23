import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User } from './../shared/user.class';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
  imagenPerfil: string;
  usuarioActual: User = new User();

  listaUsuarios: User[] = [{ id: 1, email: "admin@admin.com", password: "111111", perfil: "admin", sexo: "femenino" },
  { id: 2, email: "invitado@invitado.com", password: "222222", perfil: "invitado", sexo: "femenino" },
  { id: 3, email: "usuario@usuario.com", password: "333333", perfil: "usuario", sexo: "masculino" },
  { id: 4, email: "anonimo@anonimo.com", password: "444444", perfil: "usuario", sexo: "masculino" },
  { id: 5, email: "tester@tester.com", password: "555555", perfil: "tester", sexo: "femenino" }];

  elegirFoto(usuario) {
    let retorno: string;
    retorno = "../../assets/images/" + usuario.perfil + ".png"
    return retorno;
  }
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  async OnLogin() {
    const user = await this.authService.OnLogin(this.user);
    if (user) {
      console.log('LOGEADO! :) ');
      this.router.navigateByUrl('/seleccion-de-juego');
    }
  }

  OnRegister() {
    this.router.navigateByUrl('/register');
  }

  rellenarCampos(usuario) {
    this.usuarioActual = usuario;
  }
}
