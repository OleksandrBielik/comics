import { environment } from './../../environments/environment';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
        user
      )
      .pipe(tap(this.setToken));
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
      .pipe(tap(this.setToken));
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
    if (response) {
      const expDate = new Date(
        new Date().getTime() + +response.expiresIn * 1000
      );
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    }
  }

  removeToken(): void {
    localStorage.clear();
  }
}
