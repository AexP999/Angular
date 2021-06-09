import { UserResolveService } from './service/user.resolve.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

let routes: Routes = [
	{
		path: 'users',
		component: UsersComponent,

		children: [
			{
				path: ':id',
				component: UserDetailsComponent,
				resolve: { data: UserResolveService }
			}
		]
	},
	{
		path: 'posts',
		component: PostsComponent,
		children: [ { path: ':id', component: PostDetailsComponent } ]
	},
	{ path: 'posts', component: PostsComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		PostsComponent,
		UserDetailsComponent,
		UserComponent,
		PostComponent,
		PostDetailsComponent
	],

	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, RouterModule.forRoot(routes) ],
	providers: [],

	bootstrap: [ AppComponent ]
})
export class AppModule {}
