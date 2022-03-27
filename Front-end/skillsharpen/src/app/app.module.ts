import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprenantModule } from './components/Apprenent/apprenant.module';

import { JwtInterceptor } from './core/helpers/jwt.interceptor';

import { AddFormateurComponent } from './components/Admin/formateur/add-formateur/add-formateur.component';

import { EditFormateurComponent } from './components/Admin/formateur/edit-formateur/edit-formateur.component';
import { ListFormateurComponent } from './components/Admin/formateur/list-formateur/list-formateur.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListeQuestionComponent } from './components/Apprenent/Questions/liste-question/liste-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharemoduleModule } from './components/share/sharemodule.module';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { ChangeBgDirective } from './change-bg.directive';
import { AddChapitreComponent } from './components/Formateur/formation/add-chapitre/add-chapitre.component';
import { AgGridModule } from 'ag-grid-angular';
import { ListeChapitreComponent } from './components/Formateur/formation/liste-chapitre/liste-chapitre.component';
import { ListeFormationComponent } from './components/Formateur/formation/liste-formation/liste-formation.component';
import { ListQuestionComponent } from './components/Formateur/Question/list-question/list-question.component';
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default,
};
@NgModule({
  declarations: [
    AppComponent,

    ListFormateurComponent,
    AddFormateurComponent,
    EditFormateurComponent,
    ListeQuestionComponent,
    ChangeBgDirective,
    ListeChapitreComponent,
    ListeFormationComponent,
    ListQuestionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ApprenantModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharemoduleModule,
    NgWizardModule.forRoot(ngWizardConfig),
    AgGridModule.withComponents([]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
