import { Injectable } from '@angular/core';
import { CLIENTS_MOCK } from '../mocks/clients.mock';
import { Client } from '../models/client.model';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private http: HttpClient) {}

  private clients: Client[] = [];
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/client`);
  }
}
