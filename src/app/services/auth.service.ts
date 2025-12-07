import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

    register(data: { username: string, email: string, password: string }): Observable<any> {
        return this.http.post(`${environment.apiUrl}/auth/register`, data)
            .pipe(
                tap((response: any) => {
                    if (response.token) {
                        localStorage.setItem('jwt_token', response.token);
                    }
                })
            );
    }
    getToken(): string | null {
      return localStorage.getItem('jwt_token');
    }

    isAuthenticated(): boolean {
      return !!this.getToken();
    }

      logout(): void {
    localStorage.removeItem('jwt_token');
  }

    login(email: string, password: string): Observable<any> {
        return this.http.post(`${environment.apiUrl}/auth/login`, { email, password })
        .pipe(
            tap((response: any) => {
            if (response.token) {
                localStorage.setItem('jwt_token', response.token);
            }
            })
        );
    }
}