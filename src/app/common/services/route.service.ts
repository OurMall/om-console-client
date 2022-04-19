import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RouteService {
	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private title: Title
	) {}

	setRouteTitle(): void {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				map(() => this.activatedRoute),
				map((route: ActivatedRoute) => {
					while (route.firstChild) {
						route = route.firstChild;
					}
					return route;
				}),
				switchMap((route) => route.data),
				map((data) => data['title'])
			)
			.subscribe((title) => this.title.setTitle(title));
	}
}