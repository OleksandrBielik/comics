import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './pages/home-page/item-list/item-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { ItemInfoComponent } from './pages/home-page/item-info/item-info.component';
import { RandomCharacterComponent } from './pages/home-page/random-character/random-character.component';
import { CharacterComponent } from './pages/character-page/character/character.component';
import { NavListComponent } from './shared/components/nav-list/nav-list.component';
import { ComicsComponent } from './pages/comics-page/comics/comics.component';
import { ComicsListComponent } from './pages/comics-page/comics-list/comics-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    HeaderComponent,
    HomeComponent,
    ItemInfoComponent,
    RandomCharacterComponent,
    CharacterComponent,
    NavListComponent,
    ComicsComponent,
    ComicsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
