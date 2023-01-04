import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Char } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  characterList$ = new BehaviorSubject<Char[]>([]);
  characterListOffset$ = new BehaviorSubject<number>(0);
  totalOffset$ = new BehaviorSubject<number>(0);

  getTotalOffset() {
    return this.totalOffset$.getValue();
  }

  setCharacters(charList: Char[]): void {
    this.characterList$.next(charList);
  }

  addCharacters(charList: Char[]): void {
    this.setCharacterListOffset();
    this.characterList$.next(this.characterList$.getValue().concat(charList));
  }

  setCharacterListOffset(): void {
    this.characterListOffset$.next(this.characterListOffset$.getValue() + 20);
  }

  setTotalOffset(offset: number): void {
    if (!this.totalOffset$.getValue()) {
      this.totalOffset$.next(offset);
    }
  }
}
