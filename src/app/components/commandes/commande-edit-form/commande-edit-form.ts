import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Commande } from '../../../models/commande.model';

@Component({
  selector: 'app-commande-edit-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './commande-edit-form.html',
  styleUrl: './commande-edit-form.css'
})
export class CommandeEditForm implements OnChanges {
  @Input() commande: Commande | null = null;
  @Input() isLoading = false;
  @Output() save = new EventEmitter<FormGroup['value']>();
  @Output() cancel = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      numeroCommande: ['', [Validators.required, Validators.maxLength(50)]],
      clientId: ['', Validators.required],
      montantTotal: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      statut: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['commande'] && this.commande) {
      this.form.patchValue({
        numeroCommande: this.commande.numeroCommande,
        clientId: this.commande.clientId,
        montantTotal: this.commande.montantTotal,
        statut: this.commande.statut
      });
    }
    if (changes['commande'] && !this.commande) {
      this.form.reset();
    }
  }

  onSave(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.save.emit(this.form.value);
  }

  onCancel(): void {
    this.form.reset();
    this.cancel.emit();
  }
}
