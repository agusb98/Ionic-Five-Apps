import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/clases/user';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input() user: User = new User();
  @Input() listaUsuarios = [{ "id": 1, "email": "admin@admin.com", "password": "111111", "perfil": "admin", "sexo": "femenino" },
  { "id": 2, "email": "invitado@invitado.com", "password": "222222", "perfil": "invitado", "sexo": "femenino" },
  { "id": 3, "email": "usuario@usuario.com", "password": "333333", "perfil": "usuario", "sexo": "masculino" },
  { "id": 4, "email": "anonimo@anonimo.com", "password": "444444", "perfil": "usuario", "sexo": "masculino" },
  { "id": 5, "email": "tester@tester.com", "password": "555555", "perfil": "tester", "sexo": "femenino" }]

  constructor(
    private authService: AuthService,
    private toast: ToastController,
    private router: Router) { }

  ngOnInit() {
  }

  seleccionarUsuario(usuario) {
    this.user.email = usuario.email;
    this.user.password = usuario.password;
  }
  async presentToast(mensaje: string, duracion: number, color: string, titulo: string, boton?: boolean,
    tituloBotonUno?: string, tituloBotonDos?: string, urlUno?: string, urlDos?: string) {
    let toast;
    if (boton) {
      toast = await this.toast.create({
        message: mensaje,
        duration: duracion,
        color: color,
        header: titulo,
        buttons: [
          {
            side: "end",
            text: tituloBotonUno,
            handler: () => {
              this.router.navigateByUrl("/" + urlUno);
            }
          },
          {
            side: "end",
            text: tituloBotonDos,
            handler: () => {
              this.router.navigateByUrl("/" + urlDos);
            }
          }
        ]

      });
    }
    else {
      toast = await this.toast.create({
        message: mensaje,
        duration: duracion,
        color: color,
        header: titulo
      });
    }
    toast.present();
  }

  async onRegister() {
    const response = await this.authService.register(this.user.email, this.user.password);
    if (response) {
      this.authService.currentUser = this.user;
      this.presentToast("Registro Exitoso", 3000, "success", "Registro de Usuario");
      this.router.navigateByUrl('/admin');
    } 
    else {
      this.presentToast("Los datos no son validos, intenta de nuevo", 3000, "warning", "Registro de Usuario");
    }
  }


  async onLogin() {
    const response = await this.authService.login(this.user.email, this.user.password);
    if (response) {
      this.authService.currentUser = this.user;
      this.presentToast("Ingreso Exitoso", 3000, "success", "Ingresar Sesión");
      this.router.navigateByUrl('/admin');
    } 
    else {
      this.presentToast("Los datos no son validos, intenta de nuevo", 3000, "warning", "Ingresar Sesión");
    }
  }

}
