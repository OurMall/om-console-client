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
	private readonly authorizationServerMetadata: object =
		environment.authorization_server;

	constructor() {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		return next.handle(request);
	}
}
