import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.user().subscribe(user => console.log(user));
  }

}
