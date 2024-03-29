import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class ResolveService implements Resolve<Observable<any[]>> {
	constructor(private httpClient: HttpClient) {}
	resolve(): Observable<any[]> | Observable<Observable<any[]>> | Promise<Observable<any[]>> {
		return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/comments');
	}
}

// route: ActivatedRouteSnapshot,
// state: RouterStateSnapshot
