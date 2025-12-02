import { Routes } from '@angular/router';
import {ClientsPage} from './components/clients/clients-page/clients-page';

export const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientsPage},
  // { path: 'commandes', component: CommandesPageComponent}
];
