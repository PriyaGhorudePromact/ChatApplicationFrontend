import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'message', component:MessageComponent},
  {path:'users', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
