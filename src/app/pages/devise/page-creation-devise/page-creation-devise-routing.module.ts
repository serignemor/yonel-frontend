import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreationDeviseComponent } from './page-creation-devise.component';

const routes: Routes = [{ path: '', component: PageCreationDeviseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCreationDeviseRoutingModule { }
