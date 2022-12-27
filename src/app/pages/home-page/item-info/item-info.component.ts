import { Comic } from './../../../shared/types/interfaces';
import { CartService } from './../../../services/cart.service';
import { Component, Input } from '@angular/core';
import { Char } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
})
export class ItemInfoComponent {
  constructor(private cartService: CartService) {}

  @Input() currentComic?: Char;

  addToCart(item: Char): void {
    this.cartService.addItem(item);
  }

  isAvailable(id: string): boolean {
    return this.cartService.isAvailable(id);
  }
}
