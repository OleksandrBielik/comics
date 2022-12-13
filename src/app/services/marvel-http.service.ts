import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class MarvelHttpService {
  constructor(private http: HttpClient) {}

  get characters(): Observable<any> {
    return this.http.get(
      'https://gateway.marvel.com:443/v1/public/characters?apikey=c9b447237a938fb45510338c1513036b'
    );
  }
}
