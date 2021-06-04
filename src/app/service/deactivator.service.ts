import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanDeactivate,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DeactivatorService implements CanDeactivate<boolean>, CanActivate {
	constructor() {}
	canDeactivate(): boolean {
		return confirm('r u sure?');
	}
	canActivate(): boolean {
		return confirm('proceed?');
	}
}
