import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailsComponent } from './components/user-detail/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

let routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{
		path: 'users',
		component: UsersComponent,
		children: [ { path: ':id', component: UserDetailsComponent } ]
	},
	{ path: 'posts', component: PostsComponent },
	{ path: 'posts/:id', component: PostDetailsComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		UserComponent,
		PostsComponent,
		PostComponent,
		PostDetailsComponent,
		UserDetailsComponent
	],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, RouterModule.forRoot(routes) ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
