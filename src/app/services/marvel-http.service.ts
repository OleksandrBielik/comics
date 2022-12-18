import { MarvelService } from 'src/app/services/marvel.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Char } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MarvelHttpService {
  constructor(private http: HttpClient, private marvelService: MarvelService) {}

  fetchCharacters(offset: number): Observable<Char[]> {
    return this.http
      .get(
        'https://gateway.marvel.com:443/v1/public/characters?apikey=c9b447237a938fb45510338c1513036b',
        { params: new HttpParams().set('offset', offset) }
      )
      .pipe(
        map((value: any) => {
          this.marvelService.setTotalOffset(value.data.total);
          return value;
        }),
        map((value: any) => value.data.results),
        map((value: Char[]) =>
          value.filter(
            (item) => !item.thumbnail.path.includes('image_not_available')
          )
        ),
        map((value: Char[]) =>
          value.map((item: Char) => {
            return {
              id: item.id,
              name: item.name,
              description: item.description,
              thumbnail: item.thumbnail,
            };
          })
        )
      );
  }

  fetchRandomCharacter(offset: number): Observable<Char> {
    return this.http
      .get(
        'https://gateway.marvel.com:443/v1/public/characters?apikey=c9b447237a938fb45510338c1513036b',
        { params: new HttpParams().set('offset', offset) }
      )
      .pipe(
        map((value: any) => value.data.results),
        map((value: Char[]) =>
          value.filter(
            (item) => !item.thumbnail.path.includes('image_not_available')
          )
        ),
        map((value: any) => {
          const { id, name, description, thumbnail } =
            value[Math.floor(Math.random() * value.length)];
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
