import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {User} from "../model/user.model";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  user(): Observable<User> {
    return this.http.get<User>(environment.endpoint + '/user');
  }

}
