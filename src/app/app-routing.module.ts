import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/character-page/character/character.component';
import { ComicsComponent } from './pages/comics-page/comics/comics.component';
import { HomeComponent } from './pages/home-page/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: HomeComponent },
  { path: 'characters/:id', component: CharacterComponent },
  { path: 'comics', component: ComicsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
