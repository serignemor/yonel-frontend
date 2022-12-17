import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'create', loadChildren: () => import('./page-creation-client/page-creation-client.module').then(m => m.PageCreationClientModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
