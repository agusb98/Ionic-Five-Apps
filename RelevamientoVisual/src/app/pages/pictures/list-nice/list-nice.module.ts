import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListNicePageRoutingModule } from './list-nice-routing.module';

import { ListNicePage } from './list-nice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListNicePageRoutingModule
  ],
  declarations: [ListNicePage]
})
export class ListNicePageModule {}
