import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit {
	@Input() user: User;

	@Output() lift = new EventEmitter();
	constructor(private router: Router, private activeRote: ActivatedRoute) {}

	ngOnInit() {}

	toDetails(): void {
		this.router.navigate([ this.user.id ], { relativeTo: this.activeRote, state: this.user });
	}
	upToPar(): void {
		this.lift.emit(this.user);
	}
}
