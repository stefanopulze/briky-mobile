import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../json/login.request';
import {Observable} from 'rxjs/Observable';
import {LoginResponse} from '../json/login.response';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import {AppStorage} from "../_security/AppStorage.storage";

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private storage: AppStorage) {
  }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(environment.endpoint + '/login', data)
      .map(response => {
        this.storage.update(response);
        return response;
      });
  }

}
