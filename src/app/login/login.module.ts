import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {FormsModule} from "@angular/forms";

const loginRoutes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {
}
