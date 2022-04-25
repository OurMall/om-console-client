import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-applications',
	templateUrl: './applications.component.html',
	styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
	apps: any[] = [];

	constructor() {
		this.apps = [
			{
				image: 'disconnected.png',
				name: 'App1',
			},
			{
				image: 'disconnected.png',
				name: 'App2',
			},
			{
				image: 'disconnected.png',
				name: 'App3',
			},
			{
				image: 'disconnected.png',
				name: 'App4',
			},
			{
				image: 'disconnected.png',
				name: 'App5',
			},
			{
				image: 'disconnected.png',
				name: 'App6',
			},
			{
				image: 'disconnected.png',
				name: 'App7',
			},
			{
				image: 'disconnected.png',
				name: 'App8',
			},
			{
				image: 'disconnected.png',
				name: 'App9',
			},
			{
				image: 'disconnected.png',
				name: 'App10',
			},
		];
	}

	ngOnInit(): void {}
}
