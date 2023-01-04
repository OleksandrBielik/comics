import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comic } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  comicsList$ = new BehaviorSubject<Comic[]>([]);
  comicsListOffset$ = new BehaviorSubject<number>(0);
  totalOffset$ = new BehaviorSubject<number>(0);

  setComics(comicsList: Comic[]): void {
    this.comicsList$.next(comicsList);
  }

  getTotalOffset() {
    return this.totalOffset$.getValue();
  }

  addComics(comicsList: Comic[]): void {
    this.setComicsListOffset();
    this.comicsList$.next(this.comicsList$.getValue().concat(comicsList));
  }

  setComicsListOffset(): void {
    this.comicsListOffset$.next(this.comicsListOffset$.getValue() + 20);
  }

  setTotalOffset(offset: number): void {
    if (!this.totalOffset$.getValue()) {
      this.totalOffset$.next(offset);
    }
  }
}
