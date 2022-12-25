import { CartItem } from './../shared/types/interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart = new BehaviorSubject<CartItem[]>([]);
  readonly cart$ = this._cart.asObservable();
  private cart: CartItem[] = [];

  addItem(сartItem: CartItem): void {
    this.cart.push(сartItem);
    this._cart.next(this.cart);
    console.log(this.cart);
  }

  isAvailable(id: string): boolean {
    return !!this.cart.find((item) => item.id === id);
  }
}
