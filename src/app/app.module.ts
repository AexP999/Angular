import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

let routes: Routes = [
	{
		path: 'users',
		component: UsersComponent
	}
];

@NgModule({
	declarations: [ AppComponent, UsersComponent, UserComponent ],

	imports: [ BrowserModule, HttpClientModule, RouterModule.forRoot(routes) ],
	providers: [],

	bootstrap: [ AppComponent ]
})
export class AppModule {}
