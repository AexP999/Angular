import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-post-details',
	templateUrl: './post-details.component.html',
	styleUrls: [ './post-details.component.scss' ]
})
export class PostDetailsComponent implements OnInit {
	post: any;

	constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
		this.activatedRoute.params.subscribe((value) => {
			let id = value.id;
			this.postService.getPostById(id).subscribe((value) => {
				this.post = value;
			});
		});
		this.activatedRoute.data.subscribe((data) => (this.post = data));
	}

	ngOnInit() {}
}
