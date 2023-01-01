import { RandomCharacterComponent } from './../random-character/random-character.component';
import { ItemInfoComponent } from './../item-info/item-info.component';
import { ItemListComponent } from './../item-list/item-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ItemListComponent,
    ItemInfoComponent,
    RandomCharacterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'characters', component: HomeComponent }]),
  ],
  exports: [RouterModule],
})
export class HomeModule {}
