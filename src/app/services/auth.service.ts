import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../components/auth/user.model';
import { Router } from '@angular/router';

export interface authResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  token: string = null;
  private tokenExpartion:any
  constructor(private http: HttpClient, private router: Router) {}

  sighUp(userName: string, password: string) {
    return this.http
      .post<authResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXfslOnvxmcdj-WzHQfHv_fppapb2IikU',
        {
          email: userName,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.errorHandler),
        tap((resData) => {
          this.token = resData.idToken;
          this.authHandler(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<authResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXfslOnvxmcdj-WzHQfHv_fppapb2IikU',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.errorHandler),
        tap((resData) => {
          this.token = resData.idToken;
          this.authHandler(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  authHandler(email: string, id: string, token: string ,expiresIn: number) {
    const exparitonDate = new Date(new Date().getTime() + expiresIn*1000);
    const user = new User(email, id, token, exparitonDate);
    this.user.next(user);
    this.autoLogOut(expiresIn*1000)
    localStorage.setItem('userData', JSON.stringify(user));
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpairationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    } else {
      const loadedUser = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpairationDate)
      );
      if (loadedUser.token) {
        this.user.next(loadedUser);
        this.autoLogOut(new Date(userData._tokenExpairationDate).getTime() - new Date().getTime())
        this.token = loadedUser.token
      }
    }
  }
  autoLogOut(exparitonDuration:number){
    this.tokenExpartion = setTimeout(() => {
      this.logout()
    }, exparitonDuration);
  }

  errorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = 'unknown messsage ouccured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'this Email Exist';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'this Email not found';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'the user name or password are not correct';
        break;
    }
    return throwError(errorMessage);
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('userData')
    this.router.navigate(['']);
    if (this.tokenExpartion){
      clearTimeout(this.tokenExpartion)
    }
    this.tokenExpartion = null
  }
}
