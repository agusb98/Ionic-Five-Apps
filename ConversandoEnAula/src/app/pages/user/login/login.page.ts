import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  form: FormGroup;

  listaUsuarios = [
    { "id": 1, "email": "admin@admin.com", "password": "111111", "perfil": "admin", "sexo": "femenino", "name": "admin" },
    { "id": 2, "email": "invitado@invitado.com", "password": "222222", "perfil": "invitado", "sexo": "femenino", "name": "invitado" },
    { "id": 3, "email": "usuario@usuario.com", "password": "333333", "perfil": "usuario", "sexo": "masculino", "name": "usuario" },
    { "id": 4, "email": "anonimo@anonimo.com", "password": "444444", "perfil": "usuario", "sexo": "masculino", "name": "anonimo" },
    { "id": 5, "email": "tester@tester.com", "password": "555555", "perfil": "tester", "sexo": "femenino", "name": "tester" }]

  validationUserMessage = {
    email: [
      { type: "required", message: "Por favor, ingrese su correo" },
      { type: "pattern", message: "El correo ingresado es incorrecto, inténtelo de nuevo!" }
    ],
    password: [
      { type: "required", message: "Por favor, ingrese su contraseña" },
      { type: "minlength", message: "La contraseña debe tener 6 caractéres o más" }

    ]
  }

  constructor(
    private formbuider: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private nav: NavController,
  ) { }

  ngOnInit() { this.validateForm(); }

  validateForm() {
    this.form = this.formbuider.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })
  }

  get email() { return this.form.get('email').value; }

  get password() { return this.form.get('password').value; }

  set email(str: string) { this.form.controls['email'].setValue(str); }

  set password(str: string) { this.form.controls['password'].setValue(str); }

  seleccionarUsuario(user) {
    this.email = user.email;
    this.password = user.password;
  }

  async onLogin() {
    try {
      const user = await this.authService.login(this.email, this.password);
      if (user) {
        localStorage.setItem('email', this.email); //Save user data in the local storage
        this.router.navigate(['room']);
      }
    }
    catch (error) { }
  }

  async onRegister() {
    try {
      const user = await this.authService.register(this.email, this.password);
      if (user) {
        localStorage.setItem('email', this.email); //Save user data in the local storage
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