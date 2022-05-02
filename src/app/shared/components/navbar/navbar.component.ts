import { Component, OnInit } from '@angular/core';

import { Oauth2Service } from '@app/common/services';

@Component({
	selector: 'app-header',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

	navLinks: any[] = [];

	constructor(
		private oauth2Service: Oauth2Service
	) {}

	ngOnInit(): void {
		this.navLinks = [
			{
				name: 'Products',
				route: 'products',
				routeClassActive: 'active'
			},
			{
				name: 'Documentation',
				route: 'docs',
				routeClassActive: 'active'
			},
			{
				name: 'Console',
				route: 'console',
				routeClassActive: 'active'
			}
		]
	}

	authorize(): void {
		this.oauth2Service.authorize().subscribe();
	}
}
