import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'Mean Stack';

	nums = [2, 5, 25, 53, 22]
	sum = () => {
		return this.nums[0] + this.nums[1]
	}

	red = "color: red"
	green = "color: green"

	bggreen = "background-color: green";
	bgred = "background-color: red";

	message = ""
	clickMe = (val: string) => {
		console.log(val)
		this.message = val
	}

	show = true;
	toggle = () => {
		this.show = !this.show;
	}

	inc() {
		this.nums.push(Math.floor(Math.random() * 100));
	}
	dec() {
		this.nums.pop();
	}
}
