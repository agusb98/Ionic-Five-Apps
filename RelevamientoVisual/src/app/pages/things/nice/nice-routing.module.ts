import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NicePage } from './nice.page';

const routes: Routes = [
  {
    path: '',
    component: NicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NicePageRoutingModule {}
