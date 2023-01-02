import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnChanges {
  @Input() cartVisibility = false;

  changeOverflow(): void {
    const body = document.querySelector('body');
    if (this.cartVisibility && body) {
      body.style.overflow = 'hidden';
    } else if (!this.cartVisibility && body) {
      body.style.overflow = 'visible';
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
