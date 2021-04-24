import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async onLogin(email, password) {
    try {
      const user = await this.authService.login(email.value, password.value);
      if (user) {
        /* const isVerified = this.authService.isEmailVerified(user);
        this.redirectUser(isVerified, 'home', 'verify-email'); */
        this.router.navigate(['home']);
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