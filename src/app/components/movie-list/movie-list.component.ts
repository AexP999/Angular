import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/service/genre.service';
import { MovieListService } from 'src/app/service/movie-list.service';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: [ './movie-list.component.scss' ]
})
export class MovieListComponent implements OnInit {
	movies: any[];
	genres: any[];
	genre: any[];
	id: string;
	basePosterUrl: string = 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/';
	constructor(private movieListService: MovieListService, private genreService: GenreService) {}

	ngOnInit() {
		this.genreService.getGenre().subscribe((value) => {
			this.genres = value.genres;
			console.log(this.genres);
		});

		this.movieListService.getMovies().subscribe((value) => {
			this.movies = value.results;
			console.log(this.movies);
		});
	}

	getGenres(id: string) {
		this.genre = this.genres.filter((genre) => genre.id === id);
		return this.genre[0].name;
	}
}
