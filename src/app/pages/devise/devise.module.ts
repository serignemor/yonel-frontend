import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviseRoutingModule } from './devise-routing.module';
import { DeviseComponent } from './devise.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    DeviseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DeviseRoutingModule
  ]
})
export class DeviseModule { }
