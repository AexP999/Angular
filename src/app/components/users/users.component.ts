import { DataTransferService } from './../../service/data-transfer.service';
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
	singleUser: User;
	username: string;

	constructor(private userService: UserService, private dataTransfer: DataTransferService) {}

	ngOnInit(): void {
		this.userService.getUsers().subscribe((value) => {
			this.users = value;
		});
	}

	userFromUser(value: User) {
		this.singleUser = value;
	}

	login() {
		this.dataTransfer.globalStore.next(this.singleUser.username);
		this.username = this.dataTransfer.globalStore.getValue();
		console.log(this.username);
	}
}
