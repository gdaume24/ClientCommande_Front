import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { CommandesTable } from '../../components/commandes/commandes-table/commandes-table';
import { CommandeCreateForm } from '../../components/commandes/commande-create-form/commande-create-form';
import { CommandeService } from '../../services/commande.service';

@Component({
  selector: 'app-commandes',
  imports: [CommandesTable, CommandeCreateForm, CommonModule, MatSnackBarModule, RouterLink],
  templateUrl: './commandes.html',
  styleUrl: './commandes.css',
})
export class Commandes {
  showForm = false;
  isLoading = false;
  @ViewChild(CommandesTable) commandesTable!: CommandesTable;

  constructor(
    private commandeService: CommandeService,
    private snackBar: MatSnackBar
  ) {}

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onCreateCommande(formData: any): void {
    this.isLoading = true;

    this.commandeService.createCommande(formData).subscribe({
      next: (response) => {
        this.snackBar.open('Commande créée avec succès!', 'Fermer', {
          duration: 5000,
          panelClass: ['success-snackbar']
        });
        this.showForm = false;
        
        setTimeout(() => {
          this.commandesTable.loadCommandes();
          this.isLoading = false;
        }, 0);
      },
      error: (err) => {
        this.snackBar.open('Erreur lors de la création de la commande.', 'Fermer', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });
        this.isLoading = false;
      }
    });
  }

  onFormCancel(): void {
    this.showForm = false;
  }
}
