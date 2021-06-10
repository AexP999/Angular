import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { UsersComponent } from './users-components/users/users.component';
import { UserComponent } from './users-components/user/user.component';

@NgModule({
	imports: [ CommonModule, UserRoutingModule ],
	declarations: [ UsersComponent, UserComponent ]
})
export class UsersModule {}
