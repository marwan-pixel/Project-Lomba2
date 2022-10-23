import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatenewPageRoutingModule } from './createnew-routing.module';

import { CreatenewPage } from './createnew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatenewPageRoutingModule
  ],
  declarations: [CreatenewPage]
})
export class CreatenewPageModule {}
