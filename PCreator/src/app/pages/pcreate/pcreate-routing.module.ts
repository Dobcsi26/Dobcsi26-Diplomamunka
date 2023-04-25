import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcreateComponent } from './pcreate.component';

const routes: Routes = [{ path: '', component: PcreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcreateRoutingModule { }
