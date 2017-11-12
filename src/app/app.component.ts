import { Component } from '@angular/core';
import {AppStorage} from "./_security/AppStorage.storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(storage: AppStorage, router: Router) {
    if(!storage.isLogged()) {
      router.navigate(['/login']);
    }
  }

}
