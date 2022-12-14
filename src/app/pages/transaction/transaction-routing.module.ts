import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransactionComponent} from './transaction.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./page-transaction/page-transaction.module').then(m => m.PageTransactionModule)
  },
  { path: 'page-modif-transaction', loadChildren: () => import('./page-modif-transaction/page-modif-transaction.module').then(m => m.PageModifTransactionModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule {
}
