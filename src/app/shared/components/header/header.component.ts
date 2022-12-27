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

  cart$!: Observable<CartItem[]>;
  @Input() cartVisibility = false;
  @Output() cartVisibilityChange = new EventEmitter<boolean>();

  onClick(): void {
    this.cartVisibilityChange.emit(!this.cartVisibility);
  }

  get totalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
  }
}
