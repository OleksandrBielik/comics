import { ComicsService } from './../../../services/comics.service';
import { MarvelHttpService } from './../../../services/marvel-http.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comic } from 'src/app/shared/types/interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss'],
})
export class ComicsListComponent implements OnInit {
  constructor(
    private marvelHttpService: MarvelHttpService,
    private comicsService: ComicsService,
    private cartService: CartService
  ) {}

  comicsList$!: BehaviorSubject<Comic[]>;
  comicsListOffset$!: BehaviorSubject<number>;

  addToCart(item: Comic): void {
    this.cartService.addItem(item);
  }

  isAvailable(id: string): boolean {
    return this.cartService.isAvailable(id);
  }

  isValidOffset(): boolean {
    return (
      this.comicsListOffset$.getValue() < this.comicsService.getTotalOffset()
    );
  }

  setComics(): void {
    this.marvelHttpService
      .fetchComics(this.comicsListOffset$.getValue())
      .subscribe((response) => this.comicsService.setComics(response));
  }

  setComicsListOffset(): void {
    this.comicsService.setComicsListOffset();
  }

  addComics() {
    this.setComicsListOffset();
    this.marvelHttpService
      .fetchComics(this.comicsListOffset$.getValue())
      .subscribe((response) => this.comicsService.addComics(response));
  }

  ngOnInit(): void {
    this.comicsList$ = this.comicsService.comicsList$;
    this.comicsListOffset$ = this.comicsService.comicsListOffset$;
    if (!this.comicsList$.getValue().length) {
      this.setComics();
    }
  }
}
