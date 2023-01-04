import { BehaviorSubject, Subscription } from 'rxjs';
import { MarvelService } from 'src/app/services/marvel.service';
import { Component, OnInit } from '@angular/core';
import { MarvelHttpService } from 'src/app/services/marvel-http.service';
import { Char } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-random-character',
  templateUrl: './random-character.component.html',
  styleUrls: ['./random-character.component.scss'],
})
export class RandomCharacterComponent implements OnInit {
  constructor(
    private marvelHttpService: MarvelHttpService,
    private marvelService: MarvelService
  ) {}
  randomCharacter?: Char;
  totalOffset$!: BehaviorSubject<number>;
  subscriptions: Subscription[] = [];

  setRandomChar(): void {
    const offset = Math.floor(
      Math.random() * (this.totalOffset$.getValue() / 20)
    );
    this.marvelHttpService
      .fetchRandomCharacter(offset)
      .subscribe((value: Char) => (this.randomCharacter = value));
  }

  ngOnInit(): void {
    this.totalOffset$ = this.marvelService.totalOffset$;
    this.setRandomChar();
  }
}
