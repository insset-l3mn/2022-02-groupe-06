import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { ApprenantModule } from '../Apprenent/apprenant.module';
import { WelcomeComponent } from '../Welcome/welcome/welcome.component';
import { AdminNavbarComponent } from './Navbar/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [NavbarComponent, WelcomeComponent],
  imports: [CommonModule],
  exports: [NavbarComponent],
})
export class SharemoduleModule {}
