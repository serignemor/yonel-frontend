import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTransactionComponent } from './page-transaction.component';

const routes: Routes = [{ path: '', component: PageTransactionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTransactionRoutingModule { }
