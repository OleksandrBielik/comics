import { ComicComponent } from './pages/comic-page/comic/comic.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comic/:id', component: ComicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
