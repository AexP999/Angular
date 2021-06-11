import { User } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/modules/posts-total/service/post.service';
import { Post } from 'src/app/modules/models/post';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: [ './user-details.component.scss' ]
})
export class UserDetailsComponent implements OnInit {
	user: User;
	userpost: Post[];
	postUserid: number;

	constructor(private activeRoute: ActivatedRoute, private postService: PostService) {}
	ngOnInit() {
		this.activeRoute.params.subscribe((value) => {
			let postUserid = value.id;

			this.postService.getUserPost(postUserid).subscribe((response) => {
				this.userpost = response;
			});
		});
	}
}
