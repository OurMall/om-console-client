import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavLinkComponent } from './components/navbar/nav-link/nav-link.component';

@NgModule({
	declarations: [NavbarComponent, FooterComponent, NavLinkComponent],
	imports: [CommonModule, RouterModule],
	exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
