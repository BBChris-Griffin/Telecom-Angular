import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePlansComponent } from './manage-plans/manage-plans.component';

const routes: Routes = [
  {
    path: 'plans', component: ManagePlansComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
