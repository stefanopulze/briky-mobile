import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AppStorage} from './AppStorage.storage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storage: AppStorage) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!this.storage.isLogged()) {
      return next.handle(req);
    } else {
      const authRequest = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this.storage.getToken())
      });

      return next.handle(authRequest);
    }

  }
}
