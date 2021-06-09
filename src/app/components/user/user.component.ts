import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit {
	@Input() user: User;

	constructor(private router: Router, private activeRote: ActivatedRoute) {}

	ngOnInit() {}

	toDetails(): void {
		this.router.navigate([ this.user.id ], { relativeTo: this.activeRote, state: this.user });
	}
}
