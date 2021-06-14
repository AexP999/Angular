import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [ CommonModule, BrowserModule, FormsModule ],
	declarations: [ AppComponent, HeroesComponent ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
