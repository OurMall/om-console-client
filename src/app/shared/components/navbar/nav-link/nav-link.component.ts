import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {

	@Input() name!: string;
	@Input() route!: string;
	@Input() routeActiveClassName!: string;

	constructor() { }

	ngOnInit(): void {
		console.log("Initializing link component")
	}
}
