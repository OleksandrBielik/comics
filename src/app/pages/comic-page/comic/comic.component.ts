import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MarvelHttpService } from 'src/app/services/marvel-http.service';
import { Comic } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private marvelHttpService: MarvelHttpService
  ) {}

  comic?: Comic;
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>
      this.marvelHttpService
        .fetchComic(params['id'])
        .subscribe((value) => (this.comic = value))
    );
  }
}
