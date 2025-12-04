import { Routes } from '@angular/router';
import {ClientsPage} from './components/clients/clients-page/clients-page';
import {RegistrationPage} from './pages/auth/registration-page/registration-page';
export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegistrationPage },
  { path: 'clients', component: ClientsPage},
  // { path: 'commandes', component: CommandesPageComponent}
];
