import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../types/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cart$?: Observable<CartItem[]>;

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
  }
}
