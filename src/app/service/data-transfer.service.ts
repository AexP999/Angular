import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataTransferService {
	globalStore = new BehaviorSubject<any>('anonimous');

	constructor() {}
}
