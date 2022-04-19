import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
	{ 
		path: '', 
		component: ApplicationsComponent 
	},
	{
		path: 'new',
		component: CreateComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ApplicationsRoutingModule {}
