import { CartService } from './../../../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../types/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  @Input() visibility = false;
  cart$?: Observable<CartItem[]>;

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
  }
}
