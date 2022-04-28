import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environment/environment';

@Injectable()
export class AuthorizationServerInterceptor implements HttpInterceptor {
	private readonly authorizationServerMetadata: object = environment.authorization_server;

	constructor() {}

	intercept(
		httpRequest: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const request = httpRequest.clone({
			setHeaders: {
				Authorization: `Bearer ${localStorage.getItem("known_token")}`
			}
		})
		return next.handle(request);
	}
}
