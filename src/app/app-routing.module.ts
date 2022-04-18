import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{ 
		path: 'home', 
		loadChildren: () => import('./modules/public/home/home.module').then(m => m.HomeModule) 
	},
	{ 
		path: 'login', 
		loadChildren: () => import('./modules/public/login/login.module').then(m => m.LoginModule) 
	},
	{ 
		path: '404', 
		loadChildren: () => import('./modules/public/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) 
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full',
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
