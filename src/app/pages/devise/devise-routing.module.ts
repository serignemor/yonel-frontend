import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviseComponent } from './devise.component';

const routes: Routes = [{ path: '', component: DeviseComponent }, { path: 'page-creation-devise', loadChildren: () => import('./page-creation-devise/page-creation-devise.module').then(m => m.PageCreationDeviseModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviseRoutingModule { }
