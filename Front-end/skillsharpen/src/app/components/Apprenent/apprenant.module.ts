import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprenantRoutingModule } from './apprenant-routing.module';
import { ListDomaineComponent } from './Domaines/list-domaine/list-domaine.component';
import { ListSousDomaineComponent } from './Domaines/list-sous-domaine/list-sous-domaine.component';
import { ListGraphComponent } from '../graph/list-graph/list-graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharemoduleModule } from '../share/sharemodule.module';
import { NavbarComponent } from '../share/Navbar/navbar/navbar.component';
import { AddQuestionsComponent } from '../Formateur/Question/add-questions/add-questions.component';
import { AdminNavbarComponent } from '../share/Navbar/admin-navbar/admin-navbar.component';
import { AddFormationComponent } from '../Formateur/formation/add-formation/add-formation.component';
import { AddChapitreComponent } from '../Formateur/formation/add-chapitre/add-chapitre.component';

@NgModule({
  declarations: [
    ListDomaineComponent,
    ListSousDomaineComponent,
    ListGraphComponent,
    AddQuestionsComponent,
    AdminNavbarComponent,
    AddFormationComponent,
    AddChapitreComponent,
  ],
  imports: [
    CommonModule,
    ApprenantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharemoduleModule,
  ],
  exports: [ListDomaineComponent, ListSousDomaineComponent, ListGraphComponent],
})
export class ApprenantModule {}
