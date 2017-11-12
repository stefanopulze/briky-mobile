import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', loadChildren: './login/login.module#LoginModule'}
];

export const appRouting = RouterModule.forRoot(routes, {useHash: true});
