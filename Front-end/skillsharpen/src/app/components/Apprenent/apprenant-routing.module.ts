import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFormateurComponent } from '../Admin/formateur/list-formateur/list-formateur.component';
import { AddChapitreComponent } from '../Formateur/formation/add-chapitre/add-chapitre.component';
import { AddFormationComponent } from '../Formateur/formation/add-formation/add-formation.component';
import { ListeChapitreComponent } from '../Formateur/formation/liste-chapitre/liste-chapitre.component';

import { AddQuestionsComponent } from '../Formateur/Question/add-questions/add-questions.component';
import { ListQuestionComponent } from '../Formateur/Question/list-question/list-question.component';
import { ListGraphComponent } from '../graph/list-graph/list-graph.component';
import { NavbarComponent } from '../shared/Navbar/navbar/navbar.component';
import { ListDomaineComponent } from './Domaines/list-domaine/list-domaine.component';
import { ListSousDomaineComponent } from './Domaines/list-sous-domaine/list-sous-domaine.component';
import { ListeFormationComponent } from './Formation/liste-formation/liste-formation.component';
import { ListeQuestionComponent } from './Questions/liste-question/liste-question.component';

const routes: Routes = [
  {
    path: 'Domaine',
    component: ListDomaineComponent,
  },
  {
    path: 'Domaine/sousdomaine',
    component: ListSousDomaineComponent,
  },
  {
    path: 'Questions',
    component: ListeQuestionComponent,
  },
  {
    path: 'graphe',
    component: ListGraphComponent,
  },
  {
    path: 'Header',
    component: NavbarComponent,
  },

  {
    path: 'addQuestions',
    component: AddQuestionsComponent,
  },
  {
    path: 'addFormation',
    component: AddFormationComponent,
  },
  {
    path: 'addChapitre',
    component: AddChapitreComponent,
  },
  {
    path: 'listeChapitre',
    component: ListeChapitreComponent,
  },
  {
    path: 'listeQuestion',
    component: ListQuestionComponent,
  },
  {
    path: 'listeFormation',
    component: ListeFormationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprenantRoutingModule {}
