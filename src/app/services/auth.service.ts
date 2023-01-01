import { environment } from './../../environments/environment';
import { catchError, Observable, of, Subject, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
        user
      )
      .pipe(
        tap(this.setToken),
        catchError((error) => {
          const { message } = error.error.error;
          this.error$.next(message);
          return throwError(() => new Error(message));
        })
      );
  }

  logout(): void {
    this.setToken(null);
  }

  registration(user: User): Observable<any> {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`,
        user
      )
      .pipe(
        tap(this.setToken),
        tap(this.setExpDate),
        catchError((error) => {
          const { message } = error.error.error;
          this.error$.next(message);
          return throwError(() => new Error(message));
        })
      );
  }

  get email(): string | null {
    return localStorage.getItem('email');
  }

  get token(): string | null {
    const exp = localStorage.getItem('fb-auth-exp');
    if (exp) {
      const expDate = new Date(exp);
      if (new Date() > expDate) {
        this.logout();
        return null;
      }
    }
    return localStorage.getItem('fb-token');
  }

  isAuthentificated(): boolean {
    return !!this.token;
  }

  private setToken(response: any): void {
    localStorage.setItem('fb-token', response.idToken);
  }

  private setExpDate(response: any): void {
    if (response.expiresIn) {
      const expDate = new Date(
        new Date().getTime() + +response.expiresIn * 1000
      );
      localStorage.setItem('fb-token-exp', expDate.toString());
    }
  }

  removeToken(): void {
    localStorage.clear();
  }
}
