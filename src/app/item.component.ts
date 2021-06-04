import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 'item-info',
	templateUrl: 'item.component.html'
})
export class ItemComponent {
	id: any;

	private routeSubscription: Subscription;

	constructor(private route: ActivatedRoute) {
		this.routeSubscription = route.params.subscribe((params) => (this.id = params['id']));
	}
}

// второй способ
// export class ItemComponent implements OnInit {
// 	id: number | undefined;

// 	constructor(private route: ActivatedRoute) {}
// 	ngOnInit() {
// 		this.route.paramMap
// 			.pipe(switchMap((value) => value.getAll('id')))
// 			.subscribe((data) => (this.id = +data));
// 	}
// }
