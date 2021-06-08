import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {User} from '../models/User';

@Injectable({
	providedIn: 'root'
})
export class UserResolveService implements Resolve<User {
	private url = 'https://jsonplaceholder.typicode.com/users';

	constructor(private httpClient: HttpClient) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
		return this.httpClient.get<any[]>(this.url);
	}
}
