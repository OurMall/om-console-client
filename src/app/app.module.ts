import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from '@app/app.component';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { environment } from '@environment/environment';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		RouterModule,
		SharedModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			registrationStrategy: 'registerWhenStable:30000',
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
