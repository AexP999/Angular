import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GenreService {
	private urlGenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9f78543a2b54160459a5f37feb44a9a1&language=en-US';

	constructor(private http: HttpClient) {}

	getGenre(): Observable<any> {
		return this.http.get<any>(this.urlGenre);
	}
	getGenreByid(id: string): Observable<any[]> {
		return this.http.get<any[]>(this.urlGenre).pipe(
			map((values) => {
				return values.filter((value) => value.name === id);
			})
		);
	}
}
