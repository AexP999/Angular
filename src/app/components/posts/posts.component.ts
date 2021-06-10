import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from './../../service/post.service';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: [ './posts.component.scss' ]
})
export class PostsComponent implements OnInit {
	@Input() usId: number;
	posts: Post[];

	constructor(private postService: PostService) {}

	ngOnInit(): void {
		this.postService.getPost(this.usId).subscribe((value: any) => {
			this.posts = value;
		});
	}
}
