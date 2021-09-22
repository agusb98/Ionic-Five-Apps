import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorsPageRoutingModule } from './colors-routing.module';

import { ColorsPage } from './colors.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorsPageRoutingModule,
    FooterModule
  ],
  declarations: [ColorsPage]
})
export class ColorsPageModule {}
