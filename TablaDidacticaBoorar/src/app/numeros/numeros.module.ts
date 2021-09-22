import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ObjetoAnimadoComponent } from '../componentes/objeto-animado/objeto-animado.component';
import { IonicModule } from '@ionic/angular';

import { NumerosPage } from './numeros.page';

const routes: Routes = [
  {
    path: '',
    component: NumerosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [NumerosPage,ObjetoAnimadoComponent]
})
export class NumerosPageModule { }
