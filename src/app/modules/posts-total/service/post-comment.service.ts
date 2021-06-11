import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PostCommentService {
	private url = 'https://jsonplaceholder.typicode.com/comments';

	constructor(private httpClient: HttpClient) {}

	getPostComment(postId: number): Observable<any[]> {
		return this.httpClient.get<any[]>(this.url + '?postId=' + postId);
	}
}
