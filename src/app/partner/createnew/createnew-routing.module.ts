import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatenewPage } from './createnew.page';

const routes: Routes = [
  {
    path: '',
    component: CreatenewPage
  },
  {
    path: 'newbusiness',
    loadChildren: () => import('./newbusiness/newbusiness.module').then( m => m.NewbusinessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatenewPageRoutingModule {}
