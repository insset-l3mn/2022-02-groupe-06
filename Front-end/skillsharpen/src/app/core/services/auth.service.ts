import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { User } from '../models/auth.models';
import { CookieService } from './cookie.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user: any;
  loading = false;
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  /**
   * Returns the current user
   */
  public currentUser(): User {
    if (!this.user) {
      this.user = this.cookieService.getCookie('currentUser');
    }
    return this.user;
  }

  /**
   * Performs the auth
   * @param email email of user
   * @param password password of user
   */
  login(email: string, password: string) {
    return this.http
      .post<any>(``, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            this.user = user;
            // store user details and jwt in cookie
            this.cookieService.setCookie(
              'currentUser',
              JSON.stringify(user),
              1
            );
          }
          return user;
        })
      );
  }

  /**
   * Logout the user
   */
  logout() {
    // remove user from local storage to log user out
    this.cookieService.deleteCookie('currentUser');
    this.user = null;
  }
}
