import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, Observable, take, tap, throwError } from 'rxjs';

import { UserLogin } from '@app/common/interfaces';
import { StorageService } from '@app/common/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private acessToken$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(private readonly http: HttpClient, private storage: StorageService) { }

	login(user: UserLogin): Observable<any> {
		return this.http.post<any>("oauth2/login", user).pipe(
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
		const accessToken = this.storage.getItem("access_token");
		if(accessToken) {
			this.acessToken$.next(true);
		} else {
			this.acessToken$.next(false);
		}
		return this.acessToken$.asObservable();
	}
}
