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

  public kindSelected: string = 'nice';
  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(private authService: AuthService, private router: Router) { }

  choose(status: boolean, user: Observable<any>) {
    if (user) {
      if (status) {
        this.router.navigateByUrl('/list/nice')
      }
      else { this.router.navigateByUrl('/list/bad'); }
    }
    if (!user) {
      this.authService.userNotLoggedNotification();
    }
  }

  logout() {
    this.router.navigate(['user/logout']);
  }
}
