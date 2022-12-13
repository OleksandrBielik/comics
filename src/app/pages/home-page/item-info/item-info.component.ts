import { Component, Input } from '@angular/core';
import { Char } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
})
export class ItemInfoComponent {
  @Input() currentComic?: Char;
}
