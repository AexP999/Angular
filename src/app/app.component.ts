import { Observable } from 'rxjs';
import { DataTransferService } from './service/data-transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: [ 'app.component.scss' ]
})
export class AppComponent implements OnInit {
	username: string;
	constructor(private dataTransfer: DataTransferService) {}

	ngOnInit(): void {
		this.dataTransfer.globalStore.subscribe((value) => (this.username = value));
	}
}
