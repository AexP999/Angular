import { Component, OnInit } from '@angular/core';
import { PostService } from './../../service/post.service';
import { Post } from 'src/app/models/post';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: [ './posts.component.scss' ]
})
export class PostsComponent implements OnInit {
	posts: Post[];

	constructor(private postService: PostService) {}

	ngOnInit(): void {
		this.postService.getPosts().subscribe((value) => {
			this.posts = value;
		});
	}
}