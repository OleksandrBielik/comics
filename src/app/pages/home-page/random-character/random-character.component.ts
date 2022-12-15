import { Component, OnInit } from '@angular/core';
import { MarvelHttpService } from 'src/app/services/marvel-http.service';
import { Char } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-random-character',
  templateUrl: './random-character.component.html',
  styleUrls: ['./random-character.component.scss'],
})
export class RandomCharacterComponent implements OnInit {
  constructor(private marvelHttpService: MarvelHttpService) {}
  randomCharacter?: Char;

  setRandomChar(): void {
    this.marvelHttpService.randomCharacter.subscribe(
      (value: Char) => (this.randomCharacter = value)
    );
  }

  ngOnInit(): void {
    this.setRandomChar();
  }
}
