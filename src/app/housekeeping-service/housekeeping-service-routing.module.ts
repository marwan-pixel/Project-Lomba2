import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HousekeepingServicePage } from './housekeeping-service.page';

const routes: Routes = [
  {
    path: '',
    component: HousekeepingServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousekeepingServicePageRoutingModule {}
