import { ComicsService } from './../../../services/comics.service';
import { MarvelHttpService } from './../../../services/marvel-http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss'],
})
export class ComicsListComponent implements OnInit {
  constructor(
    private marvelHttpService: MarvelHttpService,
    private comicsService: ComicsService
  ) {}

  comicsList$?: Observable<Comic[]>;
  comicsListOffset = 0;

  ngOnInit(): void {
    this.comicsList$ = this.comicsService.comicsList$;
    this.marvelHttpService
      .fetchComics(this.comicsListOffset)
      .subscribe((response: Comic[]) => this.comicsService.setComics(response));
  }
}
