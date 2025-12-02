import { Component } from '@angular/core';
import {ClientsTable} from '../clients-table/clients-table';

@Component({
  selector: 'app-clients-page',
  imports: [ClientsTable],
  templateUrl: './clients-page.html',
  styleUrl: './clients-page.css',
})
export class ClientsPage {

}
