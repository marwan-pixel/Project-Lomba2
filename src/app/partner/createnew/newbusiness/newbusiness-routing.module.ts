import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewbusinessPage } from './newbusiness.page';

const routes: Routes = [
  {
    path: '',
    component: NewbusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewbusinessPageRoutingModule {}
