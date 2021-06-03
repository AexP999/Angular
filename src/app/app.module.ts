import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-detail/user-details.component';

let routes: Routes = [
	{
		path: 'users',
		component: UsersComponent,
		children: [ { path: ':id', component: UserDetailsComponent } ]
	},
	{ path: 'home', component: HomeComponent }
];

@NgModule({
	declarations: [ AppComponent, UsersComponent, UserComponent, PostsComponent, PostComponent ],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, RouterModule.forRoot(routes) ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
