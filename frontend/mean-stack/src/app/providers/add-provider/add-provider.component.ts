import { Component, OnInit } from '@angular/core';
import { Providers } from 'src/app/models/providers.model';
import { FormGroup, FormControl } from '@angular/forms';
import { providers } from 'src/app/models/providers.data';

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
			firstname: new FormControl(),
			lastname: new FormControl(),
			position: new FormControl(),
			company_name: new FormControl(),
			address: new FormControl(),
			city: new FormControl(),
			phone: new FormControl(),
			email: new FormControl(),
			description: new FormControl(),
			tagline: new FormControl()
		})
	}

	title = "Mean Stack"

	handleSubmit() {

		console.log(this.providerForm.value);

		let newId: number;
		while (true) {
			newId = Math.floor(Math.random() * 10000) + 99999
			if (providers.findIndex(el => el.id == newId) === -1) {
				break;
			}
		}

		let p = this.providerForm.value;
		this.provider.id = newId;
		this.provider.firstname = p.firstname
		this.provider.lastname = p.lastname
		this.provider.position = p.position
		this.provider.company = {
			company_name: p.company_name,
			address: p.address,
			city: p.city,
			phone: p.phone,
			email: p.email,
			description: p.description,
			tagline: p.tagline
		}

		providers.push(this.provider);
		this.submitted = true;
	}
}
