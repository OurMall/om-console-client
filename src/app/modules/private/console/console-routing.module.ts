import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console.component';

const routes: Routes = [
	{
		path: '',
		component: ConsoleComponent,
		children: [
			{
				path: 'applications',
				data: {
					title: 'Aplicaciones',
				},
				loadChildren: () =>
					import('./applications/applications.module').then(
						(m) => m.ApplicationsModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ConsoleRoutingModule {}
