import { MarvelService } from 'src/app/services/marvel.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Char, Comic } from '../shared/types/interfaces';

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
        map((value: any) =>
          value.filter(
            (item: any) => !item.thumbnail.path.includes('image_not_available')
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
        map((value: any[]) =>
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

  fetchCharacter(id: number): Observable<Char> {
    return this.http
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=c9b447237a938fb45510338c1513036b`
      )
      .pipe(
        map((value: any) => value.data.results),
        map((value: any) => {
          const {
            id,
            name,
            description,
            thumbnail,
            comics: { items },
          } = value[0];
          return {
            id,
            name,
            description,
            thumbnail,
            comics: items,
          };
        })
      );
  }

  fetchComics(offset: number): Observable<Comic[]> {
    return this.http
      .get(
        'https://gateway.marvel.com:443/v1/public/comics?apikey=c9b447237a938fb45510338c1513036b',
        { params: new HttpParams().set('offset', offset) }
      )
      .pipe(
        map((value: any) => {
          this.marvelService.setTotalOffset(value.data.total);
          return value;
        }),
        map((value: any) => value.data.results),
        map((value: any) =>
          value.filter(
            (item: any) => !item.thumbnail.path.includes('image_not_available')
          )
        ),
        map((value: Comic[]) =>
          value.map((item: Comic) => {
            const { id, title, description, thumbnail } = item;
            return {
              id,
              title,
              description,
              thumbnail,
            };
          })
        )
      );
  }

  fetchComic(id: number): Observable<Comic> {
    return this.http
      .get(
        `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=c9b447237a938fb45510338c1513036b`
      )
      .pipe(
        map((value: any) => value.data.results),
        map((value: any) => {
          const { id, title, description, thumbnail, series } = value[0];
          return {
            id,
            title,
            description,
            thumbnail,
            series,
          };
        })
      );
  }
}
