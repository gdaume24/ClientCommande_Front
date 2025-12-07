import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule, 
    CommonModule,
     MatCardModule, 
     MatInputModule, 
     MatButtonModule, 
     MatIconModule
    ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,
              private router: Router
  ) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/commandes']);
      },
      error: (error) => {
        console.error('Login failed', error);
        // Afficher un message d'erreur
      }
    });
  }
}
