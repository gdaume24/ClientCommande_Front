import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
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
    ReactiveFormsModule,
    MatSnackBarModule
    ],  
  templateUrl: './registration-page.html',
  styleUrl: './registration-page.css',
})
export class RegistrationPage {
  registrationForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar) {
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
        this.snackBar.open('Enregistrement réussi ! Vous pouvez maintenant vous connecter.', 'Fermer', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['success-snackbar']
        });
      },
      error: (error) => {
        console.error('Registration failed', error);
        this.snackBar.open('Erreur lors de l\'enregistrement. Veuillez réessayer.', 'Fermer', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        });
      }
    });
  }
}













