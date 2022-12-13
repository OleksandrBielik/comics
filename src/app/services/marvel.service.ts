import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from } from 'rxjs';
import { Char } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(private http: HttpClient) {}

  private _characterList = new BehaviorSubject<Char[]>([]);
  readonly characterList$ = this._characterList.asObservable();

  private characterList: Char[] = [];

  setCharacters(charList: Char[]): void {
    this.characterList = charList;
    this._characterList.next(this.characterList);
  }

  addCharacters(charList: Char[]): void {
    this.characterList = this.characterList.concat(charList);
    this._characterList.next(this.characterList);
  }
}
