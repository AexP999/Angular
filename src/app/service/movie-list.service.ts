import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MovieListService {
	private urlMoviesList = 'https://api.themoviedb.org/3/discover/movie?api_key=9f78543a2b54160459a5f37feb44a9a1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

	constructor(private http: HttpClient) {}

	getMovies(): Observable<any> {
		return this.http.get<any>(this.urlMoviesList);
	}
}
