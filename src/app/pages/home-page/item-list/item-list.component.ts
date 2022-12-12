import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarvelService } from 'src/app/services/marvel.service';
import { Comic } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  constructor(private marvelService: MarvelService) {}
  characters: Comic[] = [];
  comic?: Comic;
  @Output() pickComic = new EventEmitter<Comic>();

  onCLick(item: Comic): void {
    this.comic = item;
    this.pickComic.emit(this.comic);
  }

  ngOnInit(): void {
    this.marvelService.characters
      .pipe(
        map((value) => {
          return value.data.results.map((item: Comic) => {
            return {
              id: item.id,
              name: item.name,
              description: item.description,
              thumbnail: item.thumbnail,
            };
          });
        })
      )
      .subscribe((response) => (this.characters = response));
  }
}
