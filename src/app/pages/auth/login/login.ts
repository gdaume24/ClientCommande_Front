import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
