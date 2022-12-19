import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comic } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  private _comicsList = new BehaviorSubject<Comic[]>([]);
  readonly comicsList$ = this._comicsList.asObservable();
  private comicsList: Comic[] = [];

  private _comicsListOffset = new BehaviorSubject<number>(0);
  readonly comicsListOffset$ = this._comicsListOffset.asObservable();
  private comicsListOffset = 0;

  private _totalOffset = new BehaviorSubject<number>(0);
  readonly totalOffset$ = this._totalOffset.asObservable();
  private totalOffset = 0;

  setComics(comicsList: Comic[]): void {
    this.comicsList = comicsList;
    this._comicsList.next(this.comicsList);
    this.setComicsListOffset();
  }

  getTotalOffset() {
    return this.totalOffset;
  }

  addComics(comicsList: Comic[]): void {
    this.comicsList = this.comicsList.concat(comicsList);
    this._comicsList.next(this.comicsList);
    this.setComicsListOffset();
  }

  setComicsListOffset(): void {
    this.comicsListOffset += 20;
    this._comicsListOffset.next(this.comicsListOffset);
  }

  setTotalOffset(offset: number): void {
    if (!this.totalOffset) {
      this.totalOffset = offset;
      this._totalOffset.next(this.totalOffset);
    }
  }
}
