import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { environment } from '@environment/environment';
import { AuthService, Oauth2Service } from '@app/common/services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

	loginForm!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private OAuth2Service: Oauth2Service,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required]]
		});
	}

	onSubmit(): void {
		if(!this.loginForm.valid) return;
		this.OAuth2Service.authorizeKnownClient({
			application_id: environment.authorization_server.application_id,
			application_secret: environment.authorization_server.application_secret
		}).subscribe({
			next: (response) => {
				console.log(response);
				this.authService.login(this.loginForm.value).subscribe();
			},
			error: (err: HttpErrorResponse) => {
				console.log(err);
			}
		});
	}

	get email() {
		return this.loginForm.get("email");
	}

	get password() {
		return this.loginForm.get("password");
	}
}
