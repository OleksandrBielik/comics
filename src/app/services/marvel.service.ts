import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Char } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private _characterList = new BehaviorSubject<Char[]>([]);
  readonly characterList$ = this._characterList.asObservable();
  private characterList: Char[] = [];

  private _characterListOffset = new BehaviorSubject<number>(0);
  readonly characterListOffset$ = this._characterListOffset.asObservable();
  private characterListOffset = 0;

  private _totalOffset = new BehaviorSubject<number>(0);
  readonly totalOffset$ = this._totalOffset.asObservable();
  private totalOffset = 0;

  getTotalOffset() {
    return this.totalOffset;
  }

  setCharacters(charList: Char[]): void {
    this.characterList = charList;
    this._characterList.next(this.characterList);
    this.setCharacterListOffset();
  }

  addCharacters(charList: Char[]): void {
    this.characterList = this.characterList.concat(charList);
    this._characterList.next(this.characterList);
    this.setCharacterListOffset();
  }

  setCharacterListOffset(): void {
    this.characterListOffset += 20;
    this._characterListOffset.next(this.characterListOffset);
  }

  setTotalOffset(offset: number): void {
    if (!this.totalOffset) {
      this.totalOffset = offset;
      this._totalOffset.next(this.totalOffset);
    }
  }
}
