import { Component, OnInit } from '@angular/core';
import { providers } from '../models/providers.data';
import { Providers } from '../models/providers.model';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styles: [
  ]
})
export class ProvidersComponent implements OnInit {

  providers: any = new Providers();
  constructor(private service: ProviderService) { }

  ngOnInit(): void {
    this.loadData();
  }
  

  loadData() {
    this.service.getProviders()
      .subscribe({
        next: (data) => {
          this.providers = data;
          console.log(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }

}
