import { CartService } from './../../../services/cart.service';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { CartItem } from '../../types/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService) {}
  @Input() cartVisibility = false;
  @Output() cartVisibilityChange = new EventEmitter<boolean>();
  cart$!: Observable<CartItem[]>;

  editItem(event: any, id: string): void {
    if (event === 'increase') {
      this.cartService.increaseQuantity(id);
    } else {
      this.cartService.decreaseQuantity(id);
    }
  }

  closeCart(): void {
    this.cartVisibility = !this.cartVisibility;
    this.cartVisibilityChange.emit(this.cartVisibility);
  }

  get totalPrice(): number {
    return this.cartService.totalPrice;
  }

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';
    }
  }

  ngOnDestroy(): void {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'visible';
    }
  }
}
