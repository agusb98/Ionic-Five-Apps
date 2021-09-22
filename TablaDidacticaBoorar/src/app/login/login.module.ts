import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerComponent } from '../componentes/spinner/spinner.component';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage,SpinnerComponent]
})
export class LoginPageModule {}
