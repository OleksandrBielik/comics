import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MarvelHttpService } from 'src/app/services/marvel-http.service';
import { MarvelService } from 'src/app/services/marvel.service';
import { Char } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  constructor(
    private marvelHttpService: MarvelHttpService,
    private marvelService: MarvelService
  ) {}
  characterList$!: BehaviorSubject<Char[]>;
  comic?: Char;
  characterListOffset$!: BehaviorSubject<number>;
  @Output() pickComic = new EventEmitter<Char>();

  onCLick(item: Char): void {
    this.comic = item;
    this.pickComic.emit(this.comic);
  }

  setCharacters(): void {
    this.marvelHttpService
      .fetchCharacters(this.characterListOffset$.getValue())
      .subscribe((response) => this.marvelService.setCharacters(response));
  }

  setCharacterListOffset(): void {
    this.marvelService.setCharacterListOffset();
  }

  addCharacters(): void {
    this.setCharacterListOffset();
    this.marvelHttpService
      .fetchCharacters(this.characterListOffset$.getValue())
      .subscribe((response) => this.marvelService.addCharacters(response));
  }

  isValidOffset(): boolean {
    return (
      this.characterListOffset$.getValue() < this.marvelService.getTotalOffset()
    );
  }

  ngOnInit(): void {
    this.characterList$ = this.marvelService.characterList$;
    this.characterListOffset$ = this.marvelService.characterListOffset$;
    if (!this.characterList$.getValue().length) {
      this.setCharacters();
    }
  }
}
