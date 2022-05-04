import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, filter, Observable, take, tap, throwError } from 'rxjs';

import { environment } from '@environment/environment';
import { SessionStorageService } from '@app/common/services';
import { ClientCredentials, KnownAuthorization } from '@app/common/interfaces';

@Injectable({
	providedIn: 'root',
})
export class Oauth2Service {

	constructor(
		private readonly http: HttpClient,
		private readonly sessionStorageService: SessionStorageService
	) {}

	getAuthorization(): Observable<any> {
		return this.http.get<any>('oauth/known', {
			params: {
				token: environment.authorization_server.application_id,
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

	authorize(): Observable<any> {
		return this.http.post<any>("oauth2/known/", {
			application_id: environment.authorization_server.application_id,
			application_secret: environment.authorization_server.application_secret
		}).pipe(
			tap((response) => {
				console.log(response);
			})
		)
	}

	authorizeKnownClient(credentials: ClientCredentials): Observable<KnownAuthorization> {
		return this.http.post<KnownAuthorization>("oauth2/known/", credentials).pipe(
			take(1),
			filter(response => response && !!response),
			tap((response) => {
				// Save the known token in the localstorage.
				//sessionStorage.setItem("known_token", response.known_token);
				this.sessionStorageService.setItem("known_token", response.known_token);
			}),
			catchError((err: HttpErrorResponse) => {
				return throwError(() => err);
			})
		);
	}

	redirectAuthorize() {
		return window.location.href = `${environment.authorization_server.endpoint}/oauth2/known?token=${environment.authorization_server.application_id}`;
	}
}
