import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NicePageRoutingModule } from './nice-routing.module';

import { NicePage } from './nice.page';
import { ChartModule } from 'primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NicePageRoutingModule,
    ChartModule
  ],
  declarations: [NicePage]
})
export class NicePageModule {}
