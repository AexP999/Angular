import { UserService } from './../../service/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {
	users: User[] = [];

	constructor(private UserService: UserService) {}

	ngOnInit(): void {
		this.UserService.getUsers().subscribe((value) => {
			this.users = value;
		});
	}
}
