import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Commande } from '../../../models/commande.model';
import { DatePipe } from '@angular/common';
import { CommandeService } from '../../../services/commande.service';
import { CommandeEditForm } from '../commande-edit-form/commande-edit-form';

@Component({
  selector: 'app-commandes-table',
  standalone: true,
  imports: [
    MatTableModule,
    DatePipe,
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    CommandeEditForm
  ],
  templateUrl: './commandes-table.html',
  styleUrl: './commandes-table.css',
})
export class CommandesTable {
  dataSource: MatTableDataSource<Commande> = new MatTableDataSource<Commande>();
  editingCommandeId: number | null = null;
  selectedCommande: Commande | null = null;
  isLoading = false;

  constructor(
    private commandeService: CommandeService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {}

  displayedColumns = [
    'id',
    'numeroCommande',
    'client',
    'montantTotal',
    'statut',
    'dateCreation',
    'actions'
  ];

  ngOnInit() {
    this.loadCommandes();
  }

  loadCommandes() {
    this.commandeService.getCommandes().subscribe(commandes => {
      this.dataSource.data = commandes;
    });
  }

  editCommande(commande: Commande) {
    this.editingCommandeId = commande.id;
    this.selectedCommande = commande;
  }

  cancelEdit() {
    setTimeout(() => {
      this.editingCommandeId = null;
      this.selectedCommande = null;
      this.cdr.detectChanges();
    });
  }

  saveEdit(commandeId: number, payload: any) {
    this.isLoading = true;
    this.commandeService.updateCommande(commandeId, payload).subscribe({
      next: () => {
        setTimeout(() => {
          this.isLoading = false;
          this.snackBar.open('Commande modifiée avec succès !', 'Fermer', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.editingCommandeId = null;
          this.selectedCommande = null;
          this.loadCommandes();
          this.cdr.detectChanges();
        });
      },
      error: (error) => {
        setTimeout(() => {
          this.isLoading = false;
          this.snackBar.open('Erreur lors de la modification de la commande.', 'Fermer', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
        });
        console.error('Error updating commande:', error);
      }
    });
  }

  deleteCommande(commande: Commande) {
    const confirmed = confirm(`Êtes-vous sûr de vouloir supprimer la commande ${commande.numeroCommande} ?`);
    if (!confirmed) return;

    this.isLoading = true;
    this.commandeService.deleteCommande(commande.id).subscribe({
      next: () => {
        setTimeout(() => {
          this.isLoading = false;
          this.snackBar.open('Commande supprimée avec succès !', 'Fermer', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.loadCommandes();
        });
      },
      error: (error) => {
        setTimeout(() => {
          this.isLoading = false;
          this.snackBar.open('Erreur lors de la suppression de la commande.', 'Fermer', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
        });
        console.error('Error deleting commande:', error);
      }
    });
  }
}
