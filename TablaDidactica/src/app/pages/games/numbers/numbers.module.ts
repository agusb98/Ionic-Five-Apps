import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumbersPageRoutingModule } from './numbers-routing.module';

import { NumbersPage } from './numbers.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumbersPageRoutingModule,
    FooterModule
  ],
  declarations: [NumbersPage]
})
export class NumbersPageModule {}
