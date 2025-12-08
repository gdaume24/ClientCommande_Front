import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-client-edit-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client-edit-form.html',
  styleUrl: './client-edit-form.css'
})
export class ClientEditForm implements OnChanges {
  @Input() client: Client | null = null;
  @Input() isLoading = false;
  @Output() save = new EventEmitter<FormGroup['value']>();
  @Output() cancel = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(50)]],
      prenom: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      adresse: ['', Validators.maxLength(150)]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['client'] && this.client) {
      this.form.patchValue({
        nom: this.client.nom,
        prenom: this.client.prenom,
        email: this.client.email,
        telephone: this.client.telephone,
        adresse: this.client.adresse
      });
    }
    if (changes['client'] && !this.client) {
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
