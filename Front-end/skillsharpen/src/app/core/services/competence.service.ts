import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CompetenceService {
  private readonly url = 'http://localhost:8085/test1/api/competence';

  constructor(private http: HttpClient) {}

  getAll(): any {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  getById(id: any): any {
    return this.http
      .get(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }
  // add competence
  addCompetence(competence: any): any {
    return this.http
      .post<any>(this.url, competence)
      .pipe(catchError(this.handleError));
  }

  //update competence
  updateCompetence(id: any, competence: any): any {
    return this.http
      .post<any>(this.url + '/' + id, competence)

      .pipe(catchError(this.handleError));
  }

  //delete Competence
  deleteCompetence(id: any): any {
    return this.http
      .delete<any>(this.url + '/' + id)
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