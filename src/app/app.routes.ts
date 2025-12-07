import { Routes } from '@angular/router';
import {RegistrationPage} from './pages/auth/registration-page/registration-page';
import {Login} from './pages/auth/login/login';
import { Commandes } from './pages/commandes/commandes';
import { guard } from './guard/guard';
import { ClientsPage } from './pages/clients/clients-page';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegistrationPage },
  { path: 'login', component: Login },
  { path: 'commandes', 
    component: Commandes,
    canActivate: [guard]  
  },
  { path: 'clients', 
    component: ClientsPage,
    canActivate: [guard]  
  },
  // { path: 'commandes', component: CommandesPageComponent}
];
