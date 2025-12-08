import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Commande } from '../models/commande.model';
import { CreateCommandeRequest, UpdateCommandeRequest } from '../dtos/requests/create-commande.request';

@Injectable({ providedIn: 'root' })
export class CommandeService {
  constructor(private http: HttpClient) {}

  getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${environment.apiUrl}/commande`);
  }

  createCommande(request: CreateCommandeRequest): Observable<Commande> {
    return this.http.post<Commande>(`${environment.apiUrl}/commande`, request);
  }

  updateCommande(id: number, request: UpdateCommandeRequest): Observable<Commande> {
    return this.http.put<Commande>(`${environment.apiUrl}/commande/${id}`, request);
  }

  deleteCommande(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/commande/${id}`);
  }
}
