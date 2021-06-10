import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserResolveService implements Resolve<any> {
	constructor(private httpClient: HttpClient, private userService: UserService) {}
	resolve(
		activatedRouteSnapshot: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<any> | any {
		return this.userService.getUserById(activatedRouteSnapshot.params.id);
	}
}
