import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: [ './user-details.component.scss' ]
})
export class UserDetailsComponent implements OnInit {
	user: User;

	constructor(private router: Router) {
		this.user = this.router.getCurrentNavigation()?.extras.state as User;
		console.log(this.user);
	}

	ngOnInit() {
		console.log(history.state);
	}
}
