import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieComponent } from './components/movie/movie.component';

let routes: Routes = [
	{ path: '', component: MovieListComponent },
	{ path: 'movie/:id', component: MovieInfoComponent }
];

@NgModule({
	declarations: [ AppComponent, MovieListComponent, MovieInfoComponent, MovieComponent ],

	imports: [ BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes) ],
	providers: [],

	bootstrap: [ AppComponent ]
})
export class AppModule {}
