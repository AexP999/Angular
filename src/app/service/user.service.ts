import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private url = 'https://jsonplaceholder.typicode.com/users';

	constructor(private httpClient: HttpClient) {}

	getUsers(): Observable<User[]> {
		return this.httpClient.get<User[]>(this.url);
	}

	getUserById(id: string): Observable<any> {
		return this.httpClient.get<any>(this.url + '/' + id);
	}
}
