import { RouterModule } from '@angular/router';
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

@NgModule({
	declarations: [ AppComponent, UsersComponent, UserComponent, PostsComponent, PostComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		RouterModule.forRoot([
			{ path: 'users', component: UsersComponent },
			{ path: 'home', component: HomeComponent }
		])
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
