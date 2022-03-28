import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprenantRoutingModule } from './apprenant-routing.module';
import { ListDomaineComponent } from './Domaines/list-domaine/list-domaine.component';
import { ListSousDomaineComponent } from './Domaines/list-sous-domaine/list-sous-domaine.component';
import { ListGraphComponent } from '../graph/list-graph/list-graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharemoduleModule } from '../shared/sharemodule.module';
import { NavbarComponent } from '../shared/Navbar/navbar/navbar.component';
import { AddQuestionsComponent } from '../Formateur/Question/add-questions/add-questions.component';
import { AdminNavbarComponent } from '../shared/Navbar/admin-navbar/admin-navbar.component';
import { AddFormationComponent } from '../Formateur/formation/add-formation/add-formation.component';
import { AddChapitreComponent } from '../Formateur/formation/add-chapitre/add-chapitre.component';
import { ListeChapitreComponent } from '../Formateur/formation/liste-chapitre/liste-chapitre.component';
import { ListeFormationFormateurComponent } from '../Formateur/formation/liste-formation/liste-formation.component';
import { ListQuestionComponent } from '../Formateur/Question/list-question/list-question.component';
import { AgGridModule } from 'ag-grid-angular';
import { ListeFormationComponent } from './Formation/liste-formation/liste-formation.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { GrapheadminComponent } from '../Admin/Graphe/grapheadmin/grapheadmin.component';
@NgModule({
  declarations: [
    ListDomaineComponent,
    ListSousDomaineComponent,
    ListGraphComponent,
    AddQuestionsComponent,
    AdminNavbarComponent,
    AddFormationComponent,
    AddChapitreComponent,
    ListeChapitreComponent,
    ListeFormationFormateurComponent,
    ListQuestionComponent,
    ListeFormationComponent,
    GrapheadminComponent,
  ],
  imports: [
    CommonModule,
    ApprenantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharemoduleModule,
    AgGridModule.withComponents([]),
    PdfViewerModule,
  ],
  exports: [ListDomaineComponent, ListSousDomaineComponent, ListGraphComponent],
})
export class ApprenantModule {}
