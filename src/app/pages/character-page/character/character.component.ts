import { MarvelHttpService } from 'src/app/services/marvel-http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Char } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private marvelHttpService: MarvelHttpService
  ) {}
  character?: Char;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>
      this.marvelHttpService
        .fetchCharacter(params['id'])
        .subscribe((value) => (this.character = value))
    );
  }
}
