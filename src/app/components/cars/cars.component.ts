import { CarsService } from './../../service/cars.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-cars',
	templateUrl: './cars.component.html',
	styleUrls: [ './cars.component.scss' ]
})
export class CarsComponent implements OnInit {
	cars: any[];
	car1 = { model: 'bmw', price: '200' };

	constructor(private carsService: CarsService) {}

	ngOnInit() {
		this.carsService.getCars().subscribe((value) => (this.cars = value));
	}

	submit(thisForm: NgForm) {
		// console.log(thisForm.model.value);
		// console.log(this.car1);
		console.log(thisForm);
	}
}
