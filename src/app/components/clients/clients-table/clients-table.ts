import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {Client} from '../../../models/client.model';
import {DatePipe} from '@angular/common';
import {ClientService} from '../../../services/client.service';
import { ClientEditForm } from '../client-edit-form/client-edit-form';


@Component({
  selector: 'app-clients-table',
  imports: [
    MatTableModule,
    DatePipe,
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    ClientEditForm
  ],
  templateUrl: './clients-table.html',
  styleUrl: './clients-table.css',
})
export class ClientsTable {
  dataSource: MatTableDataSource<Client> = new MatTableDataSource<Client>();
  editingClientId: number | null = null;
  selectedClient: Client | null = null;
  isLoading = false;

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {}

  displayedColumns = [
    'id',
    'nom',
    'prenom',
    'email',
    'telephone',
    'adresse',
    'dateCreation',
    'actions'
  ];

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe(clients => {
      this.dataSource.data = clients;
    });
  }

  editClient(client: Client) {
    this.editingClientId = client.id;
    this.selectedClient = client;
  }

  cancelEdit() {
    setTimeout(() => {
      this.editingClientId = null;
      this.selectedClient = null;
      this.cdr.detectChanges();
    });
  }

  saveEdit(clientId: number, payload: any) {
    this.isLoading = true;
    this.clientService.updateClient(clientId, payload).subscribe({
      next: () => {
        setTimeout(() => {
          this.isLoading = false;
          this.snackBar.open('Client modifié avec succès !', 'Fermer', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.editingClientId = null;
          this.selectedClient = null;
          this.loadClients();
          this.cdr.detectChanges();
        });
      },
      error: (error) => {
        setTimeout(() => {
          this.isLoading = false;
          this.snackBar.open('Erreur lors de la modification du client.', 'Fermer', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
        });
        console.error('Error updating client:', error);
      }
    });
  }

  deleteClient(client: Client) {
    const confirmed = confirm(`Êtes-vous sûr de vouloir supprimer le client ${client.prenom} ${client.nom} ?`);
    if (!confirmed) return;

    this.isLoading = true;
    this.clientService.deleteClient(client.id).subscribe({
      next: () => {
        setTimeout(() => {
          this.isLoading = false;
          this.snackBar.open('Client supprimé avec succès !', 'Fermer', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.loadClients();
        });
      },
      error: (error) => {
        setTimeout(() => {
          this.isLoading = false;
          this.snackBar.open('Erreur lors de la suppression du client.', 'Fermer', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
        });
        console.error('Error deleting client:', error);
      }
    });
  }
}
