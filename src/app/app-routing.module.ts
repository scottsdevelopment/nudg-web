import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyFormComponent } from './policy-form/policy-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'policy/:id', component: PolicyFormComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

/* { path: 'app', component: MainComponent, canActivate: [AuthGuard], children: [
  {path: 'books', component: BooksComponent },
  {path: 'cars', component: CarsComponent },
  {path: 'trees', component: TreesComponent }
]}, */


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
