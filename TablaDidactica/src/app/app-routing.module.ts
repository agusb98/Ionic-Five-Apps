import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guards/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'splash', pathMatch: 'full'
  },
  { path: 'splash', loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule) },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'animals',
    loadChildren: () => import('./pages/games/animals/animals.module').then(m => m.AnimalsPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'numbers',
    loadChildren: () => import('./pages/games/numbers/numbers.module').then(m => m.NumbersPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'colors',
    loadChildren: () => import('./pages/games/colors/colors.module').then(m => m.ColorsPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/user/login/login.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
