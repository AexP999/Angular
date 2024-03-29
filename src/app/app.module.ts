import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ResolveService } from './service/resolve.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-detail/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { DeactivatorService } from './service/deactivator.service';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';

let routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{
		path: 'users',
		component: UsersComponent,
		children: [ { path: ':id', component: UserDetailsComponent } ]
	},
	{ path: 'posts', component: PostsComponent, canDeactivate: [ DeactivatorService ] },
	{ path: 'posts/:id', component: PostDetailsComponent, canActivate: [ DeactivatorService ] },

	{ path: 'comments', component: CommentsComponent, resolve: { data: ResolveService } }
];

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		UserComponent,
		PostsComponent,
		PostComponent,
		PostDetailsComponent,
		UserDetailsComponent,
		CommentsComponent,
		CommentComponent
	],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, RouterModule.forRoot(routes) ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
