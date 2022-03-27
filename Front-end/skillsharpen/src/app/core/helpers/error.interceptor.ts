// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// import { AuthenticationService } from '../services/auth.service';
// import Swal from "sweetalert2";

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//   constructor(private authenticationService: AuthenticationService) { }


//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(catchError(err => {

//       if (err.status === 0 && err.error instanceof ProgressEvent) {
//         // A client-side or network error occurred. Handle it accordingly.
//         Swal.fire({
//           title: 'No Internet Found',
//           text: err.error.detail,
//           icon: 'error'
//         });

//       }
//       if (err.status === 401) {

//         Swal.fire({
//           title: 'Failed!!',
//           text: err.error.detail,
//           icon: 'error'
//         });
//       }

//       if (err.status === 500) {

// this.authenticationService.loading=false;

//         Swal.fire({
//           title: 'Failed 500!!',
//           text: err.error.detail,
//           icon: 'error'
//         });
//       }

//       if (err.status === 400) {

//         Swal.fire({
//           title: 'Failed Time Out!!',
//           text: err.error.detail,
//           icon: 'error'
//         });
//       }

//       if (err.status === 404) {

//         Swal.fire({
//           title: 'Erreur 404 Rout Not Found!!',
//           text: err?.error?.detail || err?.status,
//           icon: 'error'
//         });
//       }

//       const error = err?.error?.detail || err?.status;


//       return throwError(error);
//     }));
//   }
// }
