import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UglyPageRoutingModule } from './ugly-routing.module';

import { UglyPage } from './ugly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UglyPageRoutingModule
  ],
  declarations: [UglyPage]
})
export class UglyPageModule {}
