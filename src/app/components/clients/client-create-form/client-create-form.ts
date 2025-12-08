import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-create-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client-create-form.html',
  styleUrl: './client-create-form.css',
})
export class ClientCreateForm {
  @Input() showForm = false;
  @Input() isLoading = false;
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();

  createClientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createClientForm = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(50)]],
      prenom: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      adresse: ['', Validators.maxLength(150)]
    });
  }

  onSubmit(): void {
    if (this.createClientForm.valid) {
      this.formSubmit.emit(this.createClientForm.value);
    }
  }

  onCancel(): void {
    this.createClientForm.reset();
    this.formCancel.emit();
  }

  resetForm(): void {
    this.createClientForm.reset();
  }
}
