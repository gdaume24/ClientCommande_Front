import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Client} from '../../../models/client.model';
import {DatePipe} from '@angular/common';
import {ClientService} from '../../../services/client.service';


@Component({
  selector: 'app-clients-table',
  imports: [
    MatTableModule,
    DatePipe
  ],
  templateUrl: './clients-table.html',
  styleUrl: './clients-table.css',
})
export class ClientsTable {
  dataSource = new MatTableDataSource<Client>();

  constructor(private clientService: ClientService) {}

  displayedColumns = [
    'id',
    'nom',
    'prenom',
    'email',
    'telephone',
    'adresse',
    'dateCreation'
  ];
  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.dataSource.data = clients;
    });
  }
}
