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
	genres: any;
	constructor(private movieListService: MovieListService, private genreService: GenreService) {
		this.movieListService.getMovies().subscribe((value) => {
			this.movies = value.results;
			console.log(value);

			this.genreService.getGenre().subscribe((value) => {
				this.genres = value.genres;
				console.log(value);
			});

			this.genreService.getGenreByid('Action').subscribe((value) => console.log(value));
		});
	}

	ngOnInit() {}
}
