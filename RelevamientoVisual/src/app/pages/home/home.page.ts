import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,
    private authService: AuthService
  ) { }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

  onLogout() {
    this.authService.signout();
  }
}
