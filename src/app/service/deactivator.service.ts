import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';

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
