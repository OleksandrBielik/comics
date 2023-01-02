import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';

@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'characters/:id', component: CharacterComponent },
    ]),
  ],
  exports: [RouterModule, CharacterComponent],
})
export class CharacterModule {}
