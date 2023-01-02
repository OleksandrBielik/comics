import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../shared/shared/shared.module';
import { ComicsComponent } from './comics.component';
import { ComicsListComponent } from './../comics-list/comics-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ComicsListComponent, ComicsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: 'comics', component: ComicsComponent }]),
  ],
  exports: [RouterModule, ComicsListComponent, ComicsComponent],
})
export class ComicsModule {}
