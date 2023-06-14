import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { LandComponent } from './land/land.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {path:'land',component:LandComponent},
  {path:'add-parcel',component:AddParcelComponent},
  {path:'app-admin-dashboard',component:AdminDashboardComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
