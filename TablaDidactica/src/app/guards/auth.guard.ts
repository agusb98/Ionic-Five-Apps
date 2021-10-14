import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService,
        private router: Router
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {

        return this.authorize();
    }

    authorize(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.auth.afAuth.user.subscribe(data => {
                if (data) { resolve(true); }
                else {
                    this.router.navigate(['./login']);
                    resolve(false);
                }
            })
        });
    }
}