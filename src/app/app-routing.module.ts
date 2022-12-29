import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/character-page/character/character.component';
import { ComicComponent } from './pages/comic-page/comic/comic.component';
import { ComicsComponent } from './pages/comics-page/comics/comics.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { RegisterComponent } from './pages/register-page/register/register.component';
import { SigninComponent } from './pages/signin-page/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: HomeComponent },
  { path: 'characters/:id', component: CharacterComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comics/:id', component: ComicComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
