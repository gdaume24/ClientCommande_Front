import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registration-page',
  imports: [
    FormsModule, 
    CommonModule,
    MatCardModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule,
    RouterModule,
    ReactiveFormsModule 
    ],  
  templateUrl: './registration-page.html',
  styleUrl: './registration-page.css',
})
export class RegistrationPage {
  registrationForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onRegistration(): void {
    this.authService.register(this.registrationForm.value).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        // Rediriger l'utilisateur ou afficher un message de succès
      },
      error: (error) => {
        console.error('Registration failed', error);
        // Afficher un message d'erreur
      }
    });
  }
}






