import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreationClientComponent } from './page-creation-client.component';

const routes: Routes = [{ path: '', component: PageCreationClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCreationClientRoutingModule { }
