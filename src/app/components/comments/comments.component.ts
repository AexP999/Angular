import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: [ './comments.component.scss' ]
})
export class CommentsComponent implements OnInit {
	constructor(private activatedRoute: ActivatedRoute) {
		this.activatedRoute.data.subscribe((value) => console.log(value));
	}

	ngOnInit(): void {}
}
