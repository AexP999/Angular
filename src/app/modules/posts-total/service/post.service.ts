import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	private url = 'https://jsonplaceholder.typicode.com/posts';

	constructor(private httpClient: HttpClient) {}

	getPosts(): Observable<Post[]> {
		return this.httpClient.get<Post[]>(this.url);
	}
	getPostById(id: string): Observable<Post> {
		return this.httpClient.get<Post>(this.url + '/' + id);
	}

	getUserPost(userId: number): Observable<Post[]> {
		return this.httpClient.get<Post[]>(this.url + '?userId=' + userId);
	}
}
