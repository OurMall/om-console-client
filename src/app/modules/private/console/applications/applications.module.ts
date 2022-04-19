import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { CreateComponent } from './create/create.component';

@NgModule({
	declarations: [ApplicationsComponent, CreateComponent],
	imports: [CommonModule, ApplicationsRoutingModule],
})
export class ApplicationsModule {}
