import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserPostProceedComponent } from './components/userPostProceed/userpostproceed.component';

let routes: Routes = [

	{ path: 'users', component: UsersComponent }
	{ path: 'posts', component: PostsComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		PostsComponent,
		HomeComponent,
		UserPostProceedComponent
	],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, RouterModule.forRoot(routes) ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
