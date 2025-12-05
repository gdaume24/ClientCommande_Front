import { Routes } from '@angular/router';
import {ClientsPage} from './components/clients/clients-page/clients-page';
import {RegistrationPage} from './pages/auth/registration-page/registration-page';
import {Login} from './pages/auth/login/login';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegistrationPage },
  { path: 'login', component: Login },

  { path: 'clients', component: ClientsPage},
  // { path: 'commandes', component: CommandesPageComponent}
];
