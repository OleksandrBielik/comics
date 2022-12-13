import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { Char } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-random-character',
  templateUrl: './random-character.component.html',
  styleUrls: ['./random-character.component.scss'],
})
export class RandomCharacterComponent implements OnInit {
  constructor(private marvelService: MarvelService) {}
  randomCharacter?: Char;

  ngOnInit(): void {
    console.log(1);
  }
}
