import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../../service/user.service';
import { User } from '../../models/user';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {
	users: User[];

	constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
		// this.activatedRoute.data.subscribe((value) => {
		// 	console.log(value);
		// });
	}

	ngOnInit(): void {
		this.userService.getUsers().subscribe((value) => {
			this.users = value;
		});
	}
}
