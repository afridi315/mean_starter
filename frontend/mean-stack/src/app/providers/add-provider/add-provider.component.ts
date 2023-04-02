import { Component, OnInit } from '@angular/core';
import { Providers } from 'src/app/models/providers.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { providers } from 'src/app/models/providers.data';

@Component({
	selector: 'app-add-provider',
	templateUrl: './add-provider.component.html',
	styles: [
	]
})
export class AddProviderComponent implements OnInit {

	submitted = false;
	provider = new Providers();
	providerForm!: FormGroup;

	constructor() { }

	ngOnInit(): void {
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

	title = "Mean Stack"

	//Get quick access to the form controls
	get f() { return this.providerForm.controls; }
	
	handleSubmit() {

		console.log(this.providerForm.value);

		let newId: number;
		/* while (true) {
			newId = Math.floor(Math.random() * 10000) + 99999
			if (provide.findIndex((el: { id: number; }) => el.id == newId) === -1) {
				break;
			}
		} */

		let p = this.providerForm.value;
		this.provider.id = p.id;	//newId;
		this.provider.firstname = p.firstname
		this.provider.lastname = p.lastname
		this.provider.position = p.position
		this.provider.company_name = p.company_name,
		this.provider.address = p.address,
		this.provider.city = p.city,
		this.provider.phone = p.phone,
		this.provider.email = p.email,
		this.provider.description = p.description,
		this.provider.tagline = p.tagline
		

		//providers.push(this.provider);
		this.submitted = true;
	}
}
