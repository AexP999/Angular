import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app.component';
import { PostsComponent } from './modules/posts-total/posts-comonents/posts/posts.component';
import { PostComponent } from './modules/posts-total/posts-comonents/post/post.component';

let routes: Routes = [
	{
		path: 'users',
		loadChildren: () => import('./modules/users-total/users.module').then((m) => m.UsersModule)
	},
	// {
	// 	path: 'posts',
	// 	component: PostsComponent,
	// 	children: [ { path: ':id', component: PostDetailsComponent } ]
	// }
	{
		path: 'posts',
		loadChildren: () => import('./modules/posts-total/posts.module').then((m) => m.PostsModule)
	}
];

@NgModule({
	declarations: [ AppComponent ],

	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, RouterModule.forRoot(routes) ],

	providers: [],

	bootstrap: [ AppComponent ]
})
export class AppModule {}
