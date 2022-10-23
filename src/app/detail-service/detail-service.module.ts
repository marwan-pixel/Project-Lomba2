import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailServicePageRoutingModule } from './detail-service-routing.module';

import { DetailServicePage } from './detail-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailServicePageRoutingModule
  ],
  declarations: [DetailServicePage]
})
export class DetailServicePageModule {}
