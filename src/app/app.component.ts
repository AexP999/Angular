import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

export class Item {
	constructor(public id: number, public product: string, public price: number) {}
}

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: [ 'app.component.scss' ]
})
export class AppComponent {
	item: Item = new Item(1, '', 0);

	constructor(private router: Router) {}

	goToItem(myItem: Item) {
		this.router.navigate([ '/item', myItem.id ], {
			queryParams: {
				product: myItem.product,
				price: myItem.price
			}
		});

		// goHome() {
		// 	this.router.navigate([ 'about' ]);
		// }
	}
}
