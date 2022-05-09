import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, Observable, take, tap, throwError } from 'rxjs';

import { UserLogin, AccessTokenResponse } from '@app/common/interfaces';
import { LocalStorageService, SessionStorageService } from '@app/common/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private acessToken$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(
		private readonly http: HttpClient,
		private readonly localStorageService: LocalStorageService,
		private readonly sessionStorageService: SessionStorageService
	) {  }

	login(user: UserLogin): Observable<AccessTokenResponse> {
		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `Bearer ${sessionStorage.getItem("known_token")}`
			})
		};
		return this.http.post<AccessTokenResponse>("oauth2/login", user, httpOptions).pipe(
			take(1),
			filter(response => response && !!response),
			tap((response) => {
				// Do something
				this.sessionStorageService.setItem("access_token", response.access_token);
				this.sessionStorageService.setItem("refresh_token", response.refresh_token);
			}),
			catchError((err: HttpErrorResponse) => {
				return throwError(() => err);
			})
		)
	}

	hasAccessToken(): Observable<boolean> {
		this.localStorageService.getItem("access_token") ? this.acessToken$.next(true) : this.acessToken$.next(false);
		return this.acessToken$.asObservable();
	}
}
