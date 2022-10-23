import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerPage } from './partner.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerPage,
  },
  {
    path: 'createnew',
    loadChildren: () =>
      import('./createnew/createnew.module').then((m) => m.CreatenewPageModule),
  },
  {
    path: 'info',
    loadChildren: () =>
      import('./info/info.module').then((m) => m.InfoPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerPageRoutingModule {}
