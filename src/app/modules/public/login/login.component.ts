import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@app/common/services';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

	loginForm!: FormGroup;

	constructor(private fb: FormBuilder, private authService: AuthService) {}

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required]]
		});
	}

	onSubmit(): void {
		this.authService.login(this.loginForm.value).subscribe(

		);
		console.log("Submited")
	}

	get email() {
		return this.loginForm.get("email");
	}

	get password() {
		return this.loginForm.get("password");
	}
}
