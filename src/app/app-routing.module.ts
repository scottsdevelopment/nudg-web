import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyFormComponent } from './policy-form/policy-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CreateDeficiencyFormComponent } from './deficiency-form/create/create.component';
import { UpdateDeficiencyFormComponent } from './deficiency-form/update/update.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'policy/:id', component: PolicyFormComponent, canActivate: [AuthGuardService] },
  { path: 'revision/:id/deficiency', component: CreateDeficiencyFormComponent, canActivate: [AuthGuardService] },
  { path: 'deficiency/:id', component: UpdateDeficiencyFormComponent, canActivate: [AuthGuardService] },
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
