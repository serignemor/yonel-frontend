import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTransactionRoutingModule } from './page-transaction-routing.module';
import { PageTransactionComponent } from './page-transaction.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    PageTransactionComponent
  ],
  imports: [
    CommonModule,
    PageTransactionRoutingModule,
    SharedModule
  ]
})
export class PageTransactionModule { }
