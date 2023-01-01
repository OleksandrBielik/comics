import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
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
  characterList$?: Observable<Char[]>;
  comic?: Char;
  characterListOffset = 0;
  @Output() pickComic = new EventEmitter<Char>();

  onCLick(item: Char): void {
    this.comic = item;
    this.pickComic.emit(this.comic);
  }

  setCharacters(): void {
    this.marvelHttpService
      .fetchCharacters(this.characterListOffset)
      .subscribe((response) => this.marvelService.addCharacters(response));
  }

  isValidOffset(): boolean {
    return this.characterListOffset < this.marvelService.getTotalOffset();
  }

  ngOnInit(): void {
    this.characterList$ = this.marvelService.characterList$;
    this.marvelService.characterListOffset$.subscribe((value) => {
      this.characterListOffset = value;
    });
    this.setCharacters();
  }
}
