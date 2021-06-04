import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ItemComponent } from './item.component';
import { ItemStatComponent } from './item.stat.component';
import { ItemDetailsComponent } from './item.details.component';
import { NotFoundComponent } from './not-found.component';
import { AboutComponent } from './about.component';

// определение дочерних маршрутов
const itemRoutes: Routes = [
	{ path: 'details', component: ItemDetailsComponent },
	{ path: 'stat', component: ItemStatComponent }
];

const appRoutes: Routes = [
	{ path: 'item/:id', component: ItemComponent },
	{ path: 'item/:id', component: ItemComponent, children: itemRoutes },
	{ path: '', component: HomeComponent }
];

@NgModule({
	imports: [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule ],
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		NotFoundComponent,
		ItemComponent,
		ItemDetailsComponent,
		ItemStatComponent
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
