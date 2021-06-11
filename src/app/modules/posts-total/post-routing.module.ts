import { PostDetailsComponent } from './posts-comonents/post-details/post-details.component';
import { PostsComponent } from './posts-comonents/posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: PostsComponent,
		children: [ { path: ':id', component: PostDetailsComponent } ]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class PostRoutingModule {}
