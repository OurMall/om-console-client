import { Component, OnInit } from '@angular/core';

import { Oauth2Service } from '@app/common/services';

@Component({
	selector: 'app-header',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

	constructor(
		private oauth2Service: Oauth2Service
	) {}

	ngOnInit(): void {}

	authorize(): void {
		this.oauth2Service.authorize().subscribe();
	}

	redirect(): void {
		this.oauth2Service.redirectAuthorize();
	}
}
