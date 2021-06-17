import { CarsService } from './../../service/cars.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from '../Car';

@Component({
	selector: 'app-cars-form',
	templateUrl: './cars-form.component.html',
	styleUrls: [ './cars-form.component.scss' ]
})
export class CarsFormComponent implements OnInit {
	car: Car = new Car('', 0, 0);
	error: string;
	cars: Car[] = [];

	constructor(private carsService: CarsService) {}

	// submitted = false;

	ngOnInit() {}

	submit(form: NgForm) {
		this.car = form.value;
		this.carsService
			.postCars(this.car)
			.subscribe(
				(param) => this.cars.push(param),
				(error) => console.log(error.error.model || error.error.year || error.error.price)
			);
	}
}
