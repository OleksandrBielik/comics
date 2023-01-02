import { Thumbnail } from './../shared/types/interfaces';
import { MarvelService } from 'src/app/services/marvel.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Author, Char, Comic } from '../shared/types/interfaces';

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
        tap((value: any) => {
          this.marvelService.setTotalOffset(value.data.total);
        }),
        map((value: any) => value.data.results),
        map((value: any) =>
          value.filter(
            (item: any) => !item.thumbnail.path.includes('image_not_available')
          )
        ),
        map((value) =>
          value.map(
            (item: {
              id: string;
              name: string;
              description: string;
              thumbnail: Thumbnail;
            }) => {
              return {
                id: item.id,
                title: item.name,
                type: 'character',
                price: Number(
                  (Math.random() * (100 - 0.01 + 1) + 0.01).toFixed(2)
                ),
                description: item.description,
                thumbnail: item.thumbnail,
              };
            }
          )
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
            title: name,
            type: 'character',
            description,
            price: Number((Math.random() * (100 - 0.01 + 1) + 0.01).toFixed(2)),
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
            title: name,
            type: 'character',
            description,
            thumbnail,
            price: Number((Math.random() * (100 - 0.01 + 1) + 0.01).toFixed(2)),
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
          console.log(console.log(value));
          this.marvelService.setTotalOffset(value.data.total);
          return value.data.results;
        }),
        map((value: any) =>
          value.filter(
            (item: any) => !item.thumbnail.path.includes('image_not_available')
          )
        ),
        map((value: Comic[]) =>
          value.map((item: Comic) => {
            const {
              id,
              title,
              description,
              thumbnail,
              creators: { items },
            } = item;
            return {
              id,
              title,
              type: 'comic',
              price: Number(
                (Math.random() * (100 - 0.01 + 1) + 0.01).toFixed(2)
              ),
              description,
              thumbnail,
              creators: items.map((item: Author) => {
                return { name: item.name, role: item.role };
              }),
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
          const {
            id,
            title,
            description,
            thumbnail,
            creators: { items },
          } = value[0];
          return {
            id,
            title,
            type: 'comic',
            description,
            thumbnail,
            price: Number((Math.random() * (100 - 0.01 + 1) + 0.01).toFixed(2)),
            creators: items.map((item: Author) => {
              return { name: item.name, role: item.role };
            }),
          };
        })
      );
  }
}
