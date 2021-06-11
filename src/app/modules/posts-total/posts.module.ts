import { PostDetailsComponent } from './posts-comonents/post-details/post-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts-comonents/posts/posts.component';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './posts-comonents/post/post.component';

@NgModule({
	imports: [ CommonModule, PostRoutingModule, PostRoutingModule ],
	declarations: [ PostsComponent, PostComponent, PostDetailsComponent ],
	exports: [ PostsComponent ]
})
export class PostsModule {}
