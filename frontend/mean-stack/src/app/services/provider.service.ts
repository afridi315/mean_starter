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
}
