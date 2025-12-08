import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { ClientsTable } from '../../components/clients/clients-table/clients-table';
import { ClientCreateForm } from '../../components/clients/client-create-form/client-create-form';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients-page',
  imports: [ClientsTable, ClientCreateForm, CommonModule, MatSnackBarModule, RouterLink],
  templateUrl: './clients-page.html',
  styleUrl: './clients-page.css',
})
export class ClientsPage {
  showForm = false;
  isLoading = false;
  @ViewChild(ClientsTable) clientsTable!: ClientsTable;

  constructor(
    private clientService: ClientService,
    private snackBar: MatSnackBar
  ) {}

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onCreateClient(formData: any): void {
    this.isLoading = true;

    this.clientService.createClient(formData).subscribe({
      next: (response) => {
        this.snackBar.open('Client créé avec succès !', 'Fermer', {
          duration: 5000,
          panelClass: ['success-snackbar']
        });
        this.showForm = false;
        
        setTimeout(() => {
          this.clientsTable.loadClients();
          this.isLoading = false;
        }, 0);
      },
      error: (error) => {
        this.snackBar.open('Erreur lors de la création du client.', 'Fermer', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });
        this.isLoading = false;
        console.error('Error creating client:', error);
      }
    });
  }

  onFormCancel(): void {
    this.showForm = false;
  }
}
