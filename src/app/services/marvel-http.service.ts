import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Char } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MarvelHttpService {
  constructor(private http: HttpClient) {}

  get characters(): Observable<any> {
    return this.http
      .get(
        'https://gateway.marvel.com:443/v1/public/characters?apikey=c9b447237a938fb45510338c1513036b'
      )
      .pipe(
        map((value: any) => {
          console.log(value);
          return value.data.results.map((item: Char) => {
            return {
              id: item.id,
              name: item.name,
              description: item.description,
              thumbnail: item.thumbnail,
            };
          });
        })
      );
  }

  get randomCharacter(): Observable<any> {
    return this.http
      .get(
        'https://gateway.marvel.com:443/v1/public/characters?apikey=c9b447237a938fb45510338c1513036b'
      )
      .pipe(
        map((value: any) => {
          const { id, name, description, thumbnail } =
            value.data.results[
              Math.floor(Math.random() * value.data.results.length)
            ];
          return {
            id,
            name,
            description,
            thumbnail,
          };
        })
      );
  }
}
