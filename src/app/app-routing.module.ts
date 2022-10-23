import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'partner',
    loadChildren: () => import('./partner/partner.module').then( m => m.PartnerPageModule)
  },
  {
    path: 'craft-service',
    loadChildren: () => import('./craft-service/craft-service.module').then( m => m.CraftServicePageModule)
  },
  {
    path: 'housekeeping-service',
    loadChildren: () => import('./housekeeping-service/housekeeping-service.module').then( m => m.HousekeepingServicePageModule)
  },
  {
    path: 'detail-service',
    loadChildren: () => import('./detail-service/detail-service.module').then( m => m.DetailServicePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
