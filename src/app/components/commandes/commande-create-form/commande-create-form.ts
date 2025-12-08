import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-commande-create-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './commande-create-form.html',
  styleUrl: './commande-create-form.css',
})
export class CommandeCreateForm {
  @Input() showForm = false;
  @Input() isLoading = false;
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();

  createCommandeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createCommandeForm = this.fb.group({
      numeroCommande: ['', [Validators.required, Validators.maxLength(50)]],
      clientId: ['', Validators.required],
      montantTotal: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      statut: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.createCommandeForm.valid) {
      this.formSubmit.emit(this.createCommandeForm.value);
    }
  }

  onCancel(): void {
    this.createCommandeForm.reset();
    this.formCancel.emit();
  }

  resetForm(): void {
    this.createCommandeForm.reset();
  }
}
