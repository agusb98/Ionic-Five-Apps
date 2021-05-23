import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBadPageRoutingModule } from './list-bad-routing.module';

import { ListBadPage } from './list-bad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBadPageRoutingModule
  ],
  declarations: [ListBadPage]
})
export class ListBadPageModule {}
