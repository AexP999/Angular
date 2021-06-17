import { CarsService } from './../../service/cars.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from '../Car';

@Component({
	selector: 'app-cars',
	templateUrl: './cars.component.html',
	styleUrls: [ './cars.component.scss' ]
})
export class CarsComponent implements OnInit {
	cars: Car[];

	constructor(private carsService: CarsService) {}

	ngOnInit() {
		this.carsService.getCars().subscribe((value) => (this.cars = value));
	}
}
