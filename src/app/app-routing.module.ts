import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreateschoolComponent } from './createschool/createschool.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { authenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path: "dashboard", component:DashboardComponent, canActivate:[authenticationGuard], children:[
    {path: "home", component:HomeComponent},
    {path: "createschool", component:CreateschoolComponent},
    {path: "allstudents", component:AllstudentsComponent},
  ]},
  {path:"**", component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
