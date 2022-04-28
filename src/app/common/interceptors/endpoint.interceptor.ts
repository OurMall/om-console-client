import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

import { environment } from '@environment/environment';

@Injectable()
export class EndpointInterceptor implements HttpInterceptor {

	private readonly endpoint: string = environment.authorization_server.endpoint;

	constructor() {}

	intercept(
		httpRequest: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const request: HttpRequest<any> = httpRequest.clone({
			url: `${this.endpoint}/${httpRequest.url}`,
		});
		return next
			.handle(request)
			.pipe(finalize(() => console.log('Finalize interception')));
	}
}
