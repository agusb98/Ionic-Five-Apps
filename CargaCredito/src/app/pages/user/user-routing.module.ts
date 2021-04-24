import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

//  Send unauthorized users to login
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['user/login']);

//  Automatically log in users
const redirectLoggedInToHome = () =>
  redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', redirectTo: 'user/login' },
  {
    path: 'login',
    loadChildren: () => import('../../pages/user/login/login.module').then(m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'register',
    loadChildren: () => import('../../pages/user/register/register.module').then(m => m.RegisterPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'logout',
    loadChildren: () => import('../../pages/user/logout/logout.module').then(m => m.LogoutPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }