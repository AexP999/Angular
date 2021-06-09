import { User } from './../../models/user';
import { UserService } from './../../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: [ './user-details.component.scss' ]
})
export class UserDetailsComponent implements OnInit {
	user: any;

	constructor(private activeRoute: ActivatedRoute, private userService: UserService) {
		this.activeRoute.params.subscribe((value) => {
			let id = value.id;

			this.userService.getUserById(id).subscribe((response) => (this.user = response));
			// this.router.getCurrentNavigation()?.extras.state as User
		});
		this.activeRoute.data.subscribe((data) => (this.user = data));
	}

	ngOnInit() {}
}
