import { Observable } from 'rxjs';
import { CartService } from './../../../services/cart.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartItem } from '../../types/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: CartService) {}

  cart$?: Observable<CartItem[]>;
  cartVisibility = false;
  @Output() cartShow = new EventEmitter<boolean>();

  onClick(): void {
    this.cartVisibility = !this.cartVisibility;
    console.log(this.cartVisibility);
    this.cartShow.emit(this.cartVisibility);
  }
  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
  }
}
