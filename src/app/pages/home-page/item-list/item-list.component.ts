import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  @Output() pickComic = new EventEmitter<Char>();

  onCLick(item: Char): void {
    this.comic = item;
    this.pickComic.emit(this.comic);
  }

  ngOnInit(): void {
    this.characterList$ = this.marvelService.characterList$;
    this.marvelHttpService.characters.subscribe((response) => {
      this.marvelService.setCharacters(response);
    });
  }
}
