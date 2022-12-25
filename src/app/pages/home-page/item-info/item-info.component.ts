import { Comic, CartItem } from './../../../shared/types/interfaces';
import { CartService } from './../../../services/cart.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Char } from 'src/app/shared/types/interfaces';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
})
export class ItemInfoComponent implements OnChanges {
  constructor(private cartService: CartService) {}

  @Input() currentComic?: Char;
  private _isAvailable = new BehaviorSubject<boolean>(false);
  readonly isAvailable$ = this._isAvailable.asObservable();
  isAvailable = false;

  addToCart(item: Char | Comic): void {
    const cartItem = {
      id: item.id,
      title: item.title,
      type: item.type,
      quantity: 1,
      price: item.price,
      thumbnail: item.thumbnail,
    };
    this.cartService.addItem(cartItem);
    this.setAvailable(cartItem.id);
  }

  setAvailable(id: string): void {
    this.isAvailable = this.cartService.isAvailable(id);
    this._isAvailable.next(this.isAvailable);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentComic'] && !changes['currentComic'].firstChange) {
      this.setAvailable(changes['currentComic'].currentValue.id);
    }
  }
}
