import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  links = [
    { name: 'animals', img: './assets/img/animals/icon.jpg' },
    { name: 'colors', img: './assets/img/colors/icon.jpg' },
    { name: 'numbers', img: './assets/img/numbers/icon.jpg' }
  ]

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  redirectTo(game: string) {
    this.router.navigate([game]);
  }

  logout(){
    this.authService.signout();
    this.router.navigate([]);
  }
}
