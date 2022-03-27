import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChapitreComponent } from '../Formateur/formation/add-chapitre/add-chapitre.component';
import { AddFormationComponent } from '../Formateur/formation/add-formation/add-formation.component';
import { AddQuestionsComponent } from '../Formateur/Question/add-questions/add-questions.component';
import { ListGraphComponent } from '../graph/list-graph/list-graph.component';
import { NavbarComponent } from '../share/Navbar/navbar/navbar.component';
import { ListDomaineComponent } from './Domaines/list-domaine/list-domaine.component';
import { ListSousDomaineComponent } from './Domaines/list-sous-domaine/list-sous-domaine.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprenantRoutingModule {}
