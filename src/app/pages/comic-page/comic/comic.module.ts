import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComicComponent } from './comic.component';
import { SharedModule } from './../../../shared/shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ComicComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: 'comics/:id', component: ComicComponent }]),
  ],
  exports: [RouterModule],
})
export class ComicModule {}
