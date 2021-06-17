import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarsFormComponent } from './components/cars-form/cars-form.component';
import { CarsComponent } from './components/cars/cars.component';

@NgModule({
	declarations: [ AppComponent, CarsComponent, CarsFormComponent ],

	imports: [ BrowserModule, HttpClientModule, FormsModule ],
	providers: [],

	bootstrap: [ AppComponent ]
})
export class AppModule {}
