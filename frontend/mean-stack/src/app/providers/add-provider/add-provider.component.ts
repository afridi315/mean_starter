import { Component, OnInit } from '@angular/core';
import { Providers } from 'src/app/models/providers.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
	selector: 'app-add-provider',
	templateUrl: './add-provider.component.html',
	styles: [
	]
})
export class AddProviderComponent implements OnInit {

	submitted = false;
	providers: Providers[] = [];
	provider = new Providers();
	providerForm!: FormGroup;

	constructor(private service: ProviderService) { }

	ngOnInit(): void {
		this.formControls();
		this.loadData();
	}

	title = "Mean Stack"

	//Get quick access to the form controls
	get f() { return this.providerForm.controls; }
	
	handleSubmit() {

		console.log(this.providerForm.value);
		this.initObject();
		if(!this.isEmailExists()) {
			this.service.addProvider(this.provider)
			.subscribe({
				next: (data) => this.submitted = true,
				error: (e) => console.log(e)				
			})
		}		
	}

	//Check email duplicats
	isEmailExists() {
		let email = this.providerForm.get('email')?.value;
		console.log(email);
		
		return this.providers.filter(el => el.company.email == email).length > 0 ? true : false
	}

	//Create a new object
	initObject() {
		let p = this.providerForm.value;
		this.provider.id = this.generateId();
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

	//Load the existing data first
	loadData() {
		this.service.getProviders()
		  .subscribe({
			next: (data) => {
			  this.providers = data;
			},
			error: (e) => {
			  console.log(e);
			}
		})
	}

	//Generate new ID
	generateId() {
		let newId: number;
		while (true) {
			newId = Math.floor(Math.random() * 10000) + 99999
			if (this.providers.findIndex(el => el.id == newId) === -1) {
				return newId;
			}
		}
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
