import { TestBed } from '@angular/core/testing';

import { AuthorizationServerInterceptor } from './authorization-server.interceptor';

describe('AuthorizationServerInterceptor', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [AuthorizationServerInterceptor],
		})
	);

	it('should be created', () => {
		const interceptor: AuthorizationServerInterceptor = TestBed.inject(
			AuthorizationServerInterceptor
		);
		expect(interceptor).toBeTruthy();
	});
});
