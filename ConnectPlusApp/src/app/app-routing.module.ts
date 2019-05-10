import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {ConnectComponent} from './connect/connect.component';

const routes: Routes = [
  {path: '', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'connect', component: ConnectComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
