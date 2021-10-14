import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage {

  constructor(
    private authService: AuthService,
    private router: Router,
    private vibration: Vibration,
    private toastr: ToastrService
  ) { }

  async onLogout() {
    try {
      await this.authService.logout();
      localStorage.setItem('email', ''); //Save user data in the local storage
      this.vibration.vibrate([1000, 500, 1000]);
      this.toastr.success('Sesión Cerrada con Exito', 'Salir');
      this.router.navigate(['']);
    }
    catch (error) {
      this.vibration.vibrate([1000]);
      this.toastr.error(error.message, 'Cerrar Sesión');
    }
  }
}
