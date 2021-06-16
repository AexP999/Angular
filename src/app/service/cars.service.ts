import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CarsService {
	private url = 'http://92.253.239.109/api/v1/cars';
	// private url = 'https://jsonplaceholder.typicode.com/posts';

	constructor(private http: HttpClient) {}

	getCars(): Observable<any[]> {
		return this.http.get<any[]>(this.url);
	}
}
// postCars(): Observable < any[] > {
//   return this
// }
