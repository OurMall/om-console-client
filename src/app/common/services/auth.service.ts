import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, Observable, take, tap, throwError } from 'rxjs';

import { UserLogin } from '@app/common/interfaces';
import { StorageService } from '@app/common/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private acessToken$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(private readonly http: HttpClient) {  }

	login(user: UserLogin): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `Bearer ${sessionStorage.getItem("known_token")}`
			})
		};
		return this.http.post<any>("oauth2/login", user, httpOptions).pipe(
			take(1),
			filter(response => response && !!response),
			tap((response) => {
				console.log(response);
			}),
			catchError((err: HttpErrorResponse) => {
				return throwError(() => err);
			})
		)
	}

	hasToken(): Observable<boolean> {
		const accessToken = localStorage.getItem("access_token"); //this.storage.getItem("access_token");
		if(accessToken) {
			this.acessToken$.next(true);
		} else {
			this.acessToken$.next(false);
		}
		return this.acessToken$.asObservable();
	}
}
