import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HousekeepingServicePageRoutingModule } from './housekeeping-service-routing.module';

import { HousekeepingServicePage } from './housekeeping-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HousekeepingServicePageRoutingModule
  ],
  declarations: [HousekeepingServicePage]
})
export class HousekeepingServicePageModule {}
