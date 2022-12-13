import { Component, Output, EventEmitter } from '@angular/core';
import { Char } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentComic?: Char;
  @Output() currentComicChange = new EventEmitter<Char>();
  changeCurrentComic($event: Char) {
    this.currentComic = $event;
    this.currentComicChange.emit(this.currentComic);
  }
}
