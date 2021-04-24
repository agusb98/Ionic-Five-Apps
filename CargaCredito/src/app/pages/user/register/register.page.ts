import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(private authService: AuthService, private router: Router) { }

  async onRegister(email, password) {    
    try {
      const user = await this.authService.register(email.value, password.value);
      if (user) { this.router.navigate(['/home']); }
    }
    catch (error) { }
  }
}