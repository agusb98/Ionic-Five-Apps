import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleryPageRoutingModule } from './galery-routing.module';

import { GaleryPage } from './galery.page';
import { Camera } from '@ionic-native/camera/ngx';

 import {ChartModule} from 'primeng/chart';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleryPageRoutingModule,
    ChartModule
  ],
  declarations: [GaleryPage],
  providers:[Camera]
})
export class GaleryPageModule {}
