import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path: 'transaction',
        loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule)
      },
      {
        path: 'agence',
        loadChildren: () => import('./agence/agence.module').then(m => m.AgenceModule)
      },
      {
        path: 'devise',
        loadChildren: () => import('./devise/devise.module').then(m => m.DeviseModule)
      },
      {
        path: 'sous-agence',
        loadChildren: () => import('./sous-agence/sous-agence.module').then(m => m.SousAgenceModule)
      },

      { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
