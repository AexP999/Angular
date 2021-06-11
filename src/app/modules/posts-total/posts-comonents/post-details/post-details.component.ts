import { Post } from './../../../models/post';
import { PostCommentService } from './../../service/post-comment.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/modules/models/comment';

@Component({
	selector: 'app-post-details',
	templateUrl: './post-details.component.html',
	styleUrls: [ './post-details.component.scss' ]
})
export class PostDetailsComponent implements OnInit {
	post: Post;
	postcomments: Comment[];
	postcommentId: number;

	constructor(
		private activatedRoute: ActivatedRoute,
		private postCommentService: PostCommentService
	) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe((value) => {
			let id = value.id;

			this.postCommentService.getPostComment(id).subscribe((value) => {
				this.postcomments = value;
			});
		});
	}
}
