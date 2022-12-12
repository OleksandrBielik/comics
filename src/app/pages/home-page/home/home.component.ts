import { Component, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentComic?: Comic;
  @Output() currentComicChange = new EventEmitter<Comic>();
  changeCurrentComic($event: Comic) {
    this.currentComic = $event;
    this.currentComicChange.emit(this.currentComic);
  }
}
