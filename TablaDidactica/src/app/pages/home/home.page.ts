import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.router.navigate(['user/logout']);
  }
}
