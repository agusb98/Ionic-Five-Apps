import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  ) { }

  async onLogOut() {
    try {
      await this.authService.logout();
      localStorage.setItem('email', ''); //Save user data in the local storage
      this.router.navigate(['user/login']);
    }
    catch (error) { }
  }
}
