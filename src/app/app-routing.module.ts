import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		data: {
			title: 'Our Mall for Developers',
		},
		loadChildren: () =>
			import('./modules/public/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'login',
		data: {
			title: 'Iniciar Session',
		},
		loadChildren: () =>
			import('./modules/public/login/login.module').then((m) => m.LoginModule),
	},
	{
		path: 'console',
		data: {
			title: 'Consola',
		},
		loadChildren: () =>
			import('./modules/private/console/console.module').then(
				(m) => m.ConsoleModule
			),
	},
	{
		path: '404',
		data: {
			title: '404',
		},
		loadChildren: () =>
			import('./modules/public/page-not-found/page-not-found.module').then(
				(m) => m.PageNotFoundModule
			),
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
