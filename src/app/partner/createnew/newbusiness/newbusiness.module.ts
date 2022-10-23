import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewbusinessPageRoutingModule } from './newbusiness-routing.module';

import { NewbusinessPage } from './newbusiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewbusinessPageRoutingModule
  ],
  declarations: [NewbusinessPage]
})
export class NewbusinessPageModule {}
