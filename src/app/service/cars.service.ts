import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../components/Car';

@Injectable({
	providedIn: 'root'
})
export class CarsService {
	private url = 'http://92.253.239.109/api/v1/cars';

	constructor(private http: HttpClient) {}

	getCars(): Observable<Car[]> {
		return this.http.get<Car[]>(this.url);
	}

	postCars(car: Car): Observable<Car> {
		return this.http.post<Car>(this.url, car);
	}
}
