import { User } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: [ './user-details.component.scss' ]
})
export class UserDetailsComponent implements OnInit {
	user: User;

	constructor(private activeRoute: ActivatedRoute, private userService: UserService) {
		this.activeRoute.params.subscribe((value) => {
			let id = value.id;

			this.userService.getUserById(id).subscribe((response) => (this.user = response));
		});
		this.activeRoute.data.subscribe(({ value }) => (this.user = value));
	}

	ngOnInit() {}
}
