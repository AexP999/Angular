import { PostService } from './../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
	selector: 'app-post-details',
	templateUrl: './post-details.component.html',
	styleUrls: [ './post-details.component.scss' ]
})
export class PostDetailsComponent implements OnInit {
	post: Post;

	constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
		this.activatedRoute.params.subscribe((params) => {
			this.postService.getPost(params.id).subscribe((value) => {
				this.post = value;
				console.log(this.post.body);
			});
		});
	}
	ngOnInit() {}
}
