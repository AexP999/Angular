import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit {
	@Input() user: User;

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {}
	goToDetails(): void {
		this.router.navigate([ this.user.id ], { relativeTo: this.activatedRoute, state: this.user });
	}
}
