import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Providers } from '../models/providers.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  
  //URL endpoint the Express app
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //GET all records
  getProviders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  //GET one record
  getProvider(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}`;
    return this.http.get(url);
  }

  //PUT update record
  updateProvider(id: number, provider: Providers): Observable<Providers> {
    return this.http.put<Providers>(`${this.apiUrl}${id}`, provider);
  }

  //POST insert a new record
  addProvider(newProvider: Providers): Observable<any> {
    return this.http.post(this.apiUrl, newProvider);
  }
}
