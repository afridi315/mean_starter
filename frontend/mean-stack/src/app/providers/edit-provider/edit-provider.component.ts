import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Providers } from 'src/app/models/providers.model';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-edit-provider',
  templateUrl: './edit-provider.component.html',
  styles: [
  ]
})
export class EditProviderComponent implements OnInit {

  submitted = false;
	providers: Providers[] = [];
	provider = new Providers();
	providerForm!: FormGroup;

  id: string = ''; // Id from the url
  email!: string; // email from the url
  ready: boolean = false  //Load the form only when the data is present

	constructor(private service: ProviderService, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.formControls();
    
    this.route.paramMap.subscribe(params => this.id = params.get('id')!)
		this.loadData();
    
	}

	title = "Mean Stack"

	//Get quick access to the form controls
	get f() { return this.providerForm.controls; }
	
	handleSubmit() {

		console.log(this.providerForm.value);
    this.initObject();
		if(!this.isEmailExists()) {
			this.service.updateProvider(parseInt(this.id), this.provider)
			.subscribe({
				next: (data) => this.submitted = true,
				error: (e) => console.log(e)				
			})
		}		
	}

	//Check email duplicats
	isEmailExists() {
		let email = this.providerForm.get('email')?.value;		
		return (this.providers.filter(el => el.company.email == email).length > 0) ? true : false
	}

	//Load the existing data first
	loadData() {
		this.service.getProvider(parseInt(this.id))
		  .subscribe({
        next: (data) => {
          this.provider = data[0];

          const flattened = Object.assign(
            {},
            this.provider,
            this.provider.company
          );

          this.providerForm.patchValue(flattened);                
          this.ready = true;
        },
        error: (e) => {
          console.log(e);
        }
    })
	}

  //Create a new object
	initObject() {
		let p = this.providerForm.value;
		this.provider.firstname = p.firstname
		this.provider.lastname = p.lastname
		this.provider.position = p.position
		this.provider.company.company_name = p.company_name,
		this.provider.company.address = p.address,
		this.provider.company.city = p.city,
		this.provider.company.phone = p.phone,
		this.provider.company.email = p.email,
		this.provider.company.description = p.description,
		this.provider.company.tagline = p.tagline
	}

	//Form controls
	formControls() {
		this.providerForm = new FormGroup({
			firstname: new FormControl('', [Validators.required, Validators.minLength(4)]),
			lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
			position: new FormControl('', [Validators.required]),
			company_name: new FormControl('', [Validators.required]),
			address: new FormControl('', [Validators.required]),
			city: new FormControl('', [Validators.required]),
			phone: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(13)]),
			email: new FormControl('', [Validators.email]),
			description: new FormControl('', [Validators.required, Validators.minLength(5)]),
			tagline: new FormControl('', [Validators.required, Validators.minLength(5)])
		})
	}

}
