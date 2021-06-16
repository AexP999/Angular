import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';

// let routes: Routes = [
// 	{
// 		path: 'cars',
// 		component: CarsComponent
// 	}
// ];

@NgModule({
	declarations: [ AppComponent, CarsComponent ],

	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule
		// RouterModule.forRoot(routes)
	],
	providers: [],

	bootstrap: [ AppComponent ]
})
export class AppModule {}
