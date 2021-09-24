import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UglyPage } from './ugly.page';

const routes: Routes = [
  {
    path: '',
    component: UglyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UglyPageRoutingModule {}
