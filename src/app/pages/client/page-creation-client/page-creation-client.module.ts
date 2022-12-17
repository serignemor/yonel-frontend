import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCreationClientRoutingModule } from './page-creation-client-routing.module';
import { PageCreationClientComponent } from './page-creation-client.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    PageCreationClientComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageCreationClientRoutingModule
  ]
})
export class PageCreationClientModule { }
