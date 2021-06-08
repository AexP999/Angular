import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
	providedIn: 'root'
})
export class UserPostService {
	private url = 'https://jsonplaceholder.typicode.com/posts';

	constructor(private httpClient: HttpClient) {}

	getUserPost(userId: string): Observable<Post> {
		return this.httpClient.get<Post>(this.url + '?userId=' + userId);
	}
}
