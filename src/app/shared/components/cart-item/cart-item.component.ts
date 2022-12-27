import { CartService } from './../../../services/cart.service';
import { CartItem } from './../../types/interfaces';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  constructor(private cartService: CartService) {}
  @Input() item!: CartItem;
  @Output() editItem = new EventEmitter<string>();
  form!: FormGroup;

  getCartItemTotalPrice(price: number, quantity: number): number {
    return price * quantity;
  }

  editQuantity(type: string): void {
    this.editItem.emit(type);
  }

  removeItem(id: string): void {
    this.cartService.removeItem(id);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      quantity: new FormControl(this.item.quantity),
    });
  }
}
