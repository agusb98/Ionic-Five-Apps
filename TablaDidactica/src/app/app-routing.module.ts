import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

//  Send unauthorized users to login
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['login']);

//  Automatically log in users
const redirectLoggedInToHome = () =>
  redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'register', loadChildren: './register/register.module#RegisterPageModule',
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'login', loadChildren: './login/login.module#LoginPageModule',
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminPageModule',
    ...canActivate(redirectUnauthorizedToLogin)
  },
  { path: 'spiner', loadChildren: './spiner/spiner.module#SpinerPageModule' },
  {
    path: 'animales', loadChildren: './animales/animales.module#AnimalesPageModule',
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'numeros', loadChildren: './numeros/numeros.module#NumerosPageModule',
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'colores', loadChildren: './colores/colores.module#ColoresPageModule',
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'seleccion-de-juego', loadChildren: './seleccion-de-juego/seleccion-de-juego.module#SeleccionDeJuegoPageModule',
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule',
    ...canActivate(redirectUnauthorizedToLogin)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
