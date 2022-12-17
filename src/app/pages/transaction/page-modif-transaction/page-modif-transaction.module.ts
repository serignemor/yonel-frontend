import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageModifTransactionRoutingModule } from './page-modif-transaction-routing.module';
import { PageModifTransactionComponent } from './page-modif-transaction.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    PageModifTransactionComponent
  ],
  imports: [
    CommonModule,
    PageModifTransactionRoutingModule,
    SharedModule
  ]
})
export class PageModifTransactionModule { }
