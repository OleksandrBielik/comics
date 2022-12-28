import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth-page/auth/auth.component';
import { CharacterComponent } from './pages/character-page/character/character.component';
import { ComicComponent } from './pages/comic-page/comic/comic.component';
import { ComicsComponent } from './pages/comics-page/comics/comics.component';
import { HomeComponent } from './pages/home-page/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: HomeComponent },
  { path: 'characters/:id', component: CharacterComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comics/:id', component: ComicComponent },
  { path: 'login', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
