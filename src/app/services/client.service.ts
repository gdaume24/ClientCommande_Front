import { Injectable } from '@angular/core';
import { CLIENTS_MOCK } from '../mocks/clients.mock';
import { Client } from '../models/client.model';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CreateClientRequest } from '../dtos/requests/create-client.request';
import { UpdateClientRequest } from '../dtos/requests/update-client.request';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private http: HttpClient) {}

  private clients: Client[] = [];
  
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/client`);
  }

  createClient(request: CreateClientRequest): Observable<Client> {
    return this.http.post<Client>(`${environment.apiUrl}/client`, request);
  }

  updateClient(id: number, request: UpdateClientRequest): Observable<Client> {
    return this.http.put<Client>(`${environment.apiUrl}/client/${id}`, request);
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/client/${id}`);
  }
}
