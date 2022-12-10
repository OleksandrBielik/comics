import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  constructor(private marvelService: MarvelService) {}
  characters: any = [];

  ngOnInit(): void {
    this.marvelService.characters.subscribe(
      (response) => (this.characters = response.data.results)
    );
    // console.log(this.characters[0].thumbnail + '.' + this.characters[0].thumbnail)
  }
}
