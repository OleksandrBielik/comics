import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cart = false;
  @Output() cartShow = new EventEmitter<boolean>();

  showCart(event: any): void {
    this.cart = event;
    this.cartShow.emit(this.cart);
  }
}
