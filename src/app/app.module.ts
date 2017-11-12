import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EuroPipe} from './pipe/euro.pipe';
import {appRouting} from './app.routing';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from "./service/authentication.service";
import {AppStorage} from "./_security/AppStorage.storage";
import {AuthInterceptor} from "./_security/auth.interceptor";
import {UserService} from "./service/user.service";


@NgModule({
  declarations: [
    AppComponent,
    EuroPipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRouting
  ],
  providers: [
    AppStorage,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
