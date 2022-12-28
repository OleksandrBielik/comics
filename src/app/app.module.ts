import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ComicComponent } from './pages/comic-page/comic/comic.component';
import { FirstLetterPipe } from './shared/pipes/first-letter.pipe';
import { CartComponent } from './shared/components/cart/cart.component';
import { CartItemComponent } from './shared/components/cart-item/cart-item.component';
import { AuthFormComponent } from './pages/auth-page/auth-form/auth-form.component';
import { AuthComponent } from './pages/auth-page/auth/auth.component';

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
    ComicComponent,
    FirstLetterPipe,
    CartComponent,
    CartItemComponent,
    AuthFormComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
