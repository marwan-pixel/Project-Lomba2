import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailServicePage } from './detail-service.page';

const routes: Routes = [
  {
    path: '',
    component: DetailServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailServicePageRoutingModule {}
