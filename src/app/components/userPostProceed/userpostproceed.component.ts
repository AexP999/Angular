import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { PostService } from '../../service/post.service';
import { User } from '../../models/User';
import { Post } from 'src/app/models/Post';

@Component({
	selector: 'app-userpostproceed',
	templateUrl: './userpostproceed.component.html',
	styleUrls: [ './userpostproceed.component.scss' ]
})
export class UserPostProceedComponent implements OnInit {
	@Input() users: User[];
	posts: Post[];
	constructor(private userService: UserService, private postService: PostService) {}

	ngOnInit(): void {
		this.userService.getUsers().subscribe((value) => {
			this.users = value;
			// console.log(this.users);
		});

		this.postService.getPosts().subscribe((value1) => {
			this.posts = value1;
			// console.log(this.posts);
		});
	}
}
