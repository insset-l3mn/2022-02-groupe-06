import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class FormateurService {
  private readonly url = 'http://localhost:8085/test1/api/formateur';
  private readonly urlformation = 'http://localhost:8085/test1/api/formation';
  private readonly urlcomeptence = 'http://localhost:8085/test1/api/competence';
  private readonly urlchapite = 'http://localhost:8085/test1/api/chapitre';
  constructor(private http: HttpClient) {}

  getAll(): any {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }
  getCompetence(): any {
    return this.http.get(this.urlcomeptence).pipe(catchError(this.handleError));
  }

  getFormation() {
    return this.http.get(this.urlformation).pipe(catchError(this.handleError));
  }

  getchapitre() {
    return this.http.get(this.urlchapite).pipe(catchError(this.handleError));
  }

  getById(id: any): any {
    return this.http
      .get(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }
  // add formateur post
  addFormateur(formateur: any): any {
    return this.http
      .post<any>(this.url, formateur, options)
      .pipe(catchError(this.handleError));
  }

  addChapitre(chapitre: any): any {
    return this.http
      .post<any>(this.urlchapite, chapitre, options)
      .pipe(catchError(this.handleError));
  }

  addCompetence(competence: any): any {
    return this.http
      .post<any>(this.urlcomeptence, competence, options)
      .pipe(catchError(this.handleError));
  }

  addFormation(formation: any): any {
    return this.http
      .post<any>(this.urlformation, formation, options)
      .pipe(catchError(this.handleError));
  }

  //update formateur
  updateFormateur(id: any, formateur: any): any {
    return this.http
      .post<any>(this.url + '/' + id, formateur, options)

      .pipe(catchError(this.handleError));
  }

  //delete formateur
  deleteFormateur(id: any): any {
    return this.http
      .delete<any>(this.url + '/' + id, options)
      .pipe(catchError(this.handleError));
  }

  //methode pour handler les erreurs
  handleError(error: any) {
    console.log(error);

    let errorMesage = '';
    if (error.error instanceof ErrorEvent) {
      //client side error
      errorMesage = `Eroor:${error?.console.error}`;
      errorMesage = `Eroor:${error?.console.error?.message}`;
    } else {
      //server side error
      errorMesage = `Erreur code : ${error?.status}\n Message:${error?.message}`;
    }

    Swal.fire({
      title: 'Failed!!',
      text: errorMesage,
      icon: 'error',
    });

    return throwError(error);
  }
}
