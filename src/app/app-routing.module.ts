import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyFormComponent } from './policy-form/policy-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'policy/:id', component: PolicyFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
