import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class UserResolveService implements Resolve<User> {
	constructor(private httpClient: HttpClient, private userService: UserService) {}
	resolve(
		activatedRouteSnapshot: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<User> {
		return this.userService.getUserById(activatedRouteSnapshot.params.id);
	}
}
