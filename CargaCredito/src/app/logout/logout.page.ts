import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { AuthService } from '../services/auth.service';
import { User } from "src/app/clases/user";
@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  user: User = new User();
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
  }
  async onLogout() {
    await this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
