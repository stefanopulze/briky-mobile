import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {LoginRequest} from "../json/login.request";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  userData: LoginRequest = new LoginRequest();

  constructor(private auth: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.userData)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/dashboard']);
      });
  }
}
