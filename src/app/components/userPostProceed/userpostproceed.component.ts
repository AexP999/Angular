import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { UserPostService } from './../../service/userpost.service';
import { User } from '../../models/user';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-userpostproceed',
	templateUrl: './userpostproceed.component.html',
	styleUrls: [ './userpostproceed.component.scss' ]
})
export class UserPostProceedComponent implements OnInit {
	// @Input() user: User[];
	users: User[];
	posts: Post[];

	constructor(
		private userService: UserService,
		private userPostService: UserPostService,
		private activeRoute: ActivatedRoute
	) {
		this.activeRoute.params.subscribe((params) => {
			console.log(params);
		});

		// console.log(this.posts);
	}

	ngOnInit(): void {
		this.userService.getUsers().subscribe((value) => {
			this.users = value;
			console.log(this.users[0].id);
		});
	}
}
