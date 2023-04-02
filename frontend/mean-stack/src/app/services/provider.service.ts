import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  //URL endpoint the Express app
  apiUrl = environment.apiUrl;
  
  constructor() { }
}
