import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: [ './post.component.scss' ]
})
export class PostComponent implements OnInit {
	@Input() post: Post;

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {}

	toDetails(): void {
		this.router.navigate([ this.post.id ], { relativeTo: this.activatedRoute, state: this.post });
	}
}
