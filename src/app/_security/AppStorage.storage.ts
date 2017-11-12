import {LoginResponse} from "../json/login.response";
import {User} from "../model/user.model";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

const USER_KEY = 'briky_mobile_secure';

export class AppStorage {

  private user: Subject<User> = new Subject();

  private data: LoginResponse;

  constructor() {
    this.data = JSON.parse(localStorage.getItem(USER_KEY));
  }

  update(data: LoginResponse) {
    localStorage.setItem(USER_KEY, JSON.stringify(data));
    this.data = data;
    this.user.next(data.user);
  }

  getUser(): Observable<User> {
    return this.user;
  }

  getToken() {
    return this.data.token;
  }

  isLogged(): boolean {
    return this.data !== null && this.data.token !== null;
  }

}
