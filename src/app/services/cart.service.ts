import { CartItem, Char, Comic } from './../shared/types/interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart = new BehaviorSubject<CartItem[]>([]);
  readonly cart$ = this._cart.asObservable();
  private cart: CartItem[] = [];

  addItem(item: Char | Comic): void {
    const cartItem: CartItem = {
      id: item.id,
      title: item.title,
      type: item.type,
      quantity: 1,
      price: item.price,
      thumbnail: item.thumbnail,
    };

    if (this.isAvailable(cartItem.id)) {
      this.increaseQuantity(cartItem.id);
      return;
    }

    this.cart.push(cartItem);
    this._cart.next(this.cart);
  }

  isAvailable(id: string): boolean {
    return !!this.cart.find((item) => item.id === id);
  }

  get totalPrice(): number {
    return this.cart.reduce(
      (accum, item) => accum + item.quantity * item.price,
      0
    );
  }

  get totalQuantity(): number {
    return this.cart.reduce((accum, item) => accum + item.quantity, 0);
  }

  checkout(): void {
    this.cart = [];
    this._cart.next(this.cart);
  }

  removeItem(id: string): void {
    this.cart = this.cart.filter((item) => item.id !== id);
    this._cart.next(this.cart);
  }

  increaseQuantity(id: string): void {
    this.cart = this.cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    this._cart.next(this.cart);
  }

  decreaseQuantity(id: string): void {
    this.cart = this.cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    this._cart.next(this.cart);
  }
}
