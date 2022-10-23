import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CraftServicePageRoutingModule } from './craft-service-routing.module';

import { CraftServicePage } from './craft-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CraftServicePageRoutingModule,

  ],
  declarations: [CraftServicePage],
})
export class CraftServicePageModule {}
