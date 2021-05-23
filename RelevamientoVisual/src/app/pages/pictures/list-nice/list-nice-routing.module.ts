import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListNicePage } from './list-nice.page';

const routes: Routes = [
  {
    path: '',
    component: ListNicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListNicePageRoutingModule {}
