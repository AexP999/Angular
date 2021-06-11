import { PostsModule } from './../posts-total/posts.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users-components/users/users.component';
import { UserComponent } from './users-components/user/user.component';
import { UserDetailsComponent } from './users-components/user-details/user-details.component';
import { UserspostsoutComponent } from './users-components/userspostsout/userspostsout.component';

@NgModule({
	imports: [ CommonModule, UserRoutingModule, PostsModule ],
	declarations: [ UsersComponent, UserComponent, UserDetailsComponent ]
})
export class UsersModule {}
