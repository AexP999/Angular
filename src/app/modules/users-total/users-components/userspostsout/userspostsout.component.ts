import { PostService } from './../../../posts-total/service/post.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-userspostsout',
	templateUrl: './userspostsout.component.html',
	styleUrls: [ './userspostsout.component.scss' ]
})
export class UserspostsoutComponent implements OnInit {
	@Input() usersId: any;
	userpost: any;
	constructor(private router: Router, private postService: PostService) {}

	ngOnInit(): void {
		this.postService.getUserPost(this.usersId).subscribe((value: any) => {
			this.userpost = value;
		});
	}
}
// 	constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
// 	ngOnInit() {}
// 	toDetails(): void {
// 		this.router.navigate([ this.post.id ], { relativeTo: this.activatedRoute, state: this.post });
// 	}
// }
// this.postService.getPosts().subscribe((value) => {
// 			this.posts = value;
// });

// constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
// 		this.activatedRoute.params.subscribe((value) => {
// 			let id = value.id;
// 			this.postService.getPostById(id).subscribe((value) => {
// 				this.post = value;
// 			});
// 		});
// 		this.activatedRoute.data.subscribe((data) => (this.post = data));
