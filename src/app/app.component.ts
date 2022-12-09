import { Component, OnInit } from '@angular/core';
import { MarvelService } from './services/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private marvelService: MarvelService) {}
  characters = [];

  ngOnInit(): void {
    this.marvelService.characters.subscribe(
      (response) => (this.characters = response.data.results)
    );
  }
}
