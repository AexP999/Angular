import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: [ './comments.component.scss' ]
})
export class CommentsComponent implements OnInit {
	@Input() comment: Comment;

	comments: any;

	constructor(private activatedRoute: ActivatedRoute) {
		this.activatedRoute.data.subscribe((value) => {
			this.comments = value;
			console.log(value);
		});
	}

	ngOnInit(): void {}
}
