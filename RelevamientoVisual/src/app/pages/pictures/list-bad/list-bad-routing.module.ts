import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBadPage } from './list-bad.page';

const routes: Routes = [
  {
    path: '',
    component: ListBadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBadPageRoutingModule {}
