import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageModifTransactionComponent } from './page-modif-transaction.component';

const routes: Routes = [{ path: '', component: PageModifTransactionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageModifTransactionRoutingModule { }
