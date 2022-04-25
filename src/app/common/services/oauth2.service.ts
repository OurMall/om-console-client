import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, filter, Observable, take, tap, throwError } from 'rxjs';

import { environment } from '@environment/environment';

@Injectable({
	providedIn: 'root',
})
export class Oauth2Service {

	constructor(
		private readonly http: HttpClient,
		private readonly router: Router
	) {}

	authorize(): Observable<any> {
		return this.http.get<any>('oauth/known', {
			params: {
				token: environment.authorization_server.client_id,
			},
		}).pipe(
			take(1),
			filter(response => response && !!response),
			tap((response) => {
				console.log(response);
			}),
			catchError((err: HttpErrorResponse) => {
				console.log(err);
				return throwError(() => err);
			})
		);
	}

	redirectAuthorize() {
		return window.location.href = `${environment.authorization_server.endpoint}/oauth/known?token=${environment.authorization_server.client_id}`;
	}
}
