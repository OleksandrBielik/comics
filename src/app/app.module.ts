import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { RegisterComponent } from './pages/register-page/register/register.component';
import { RegisterFormComponent } from './pages/register-page/register-form/register-form.component';
import { SigninComponent } from './pages/signin-page/signin/signin.component';
import { SigninFormComponent } from './pages/signin-page/signin-form/signin-form.component';

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
    RegisterComponent,
    RegisterFormComponent,
    SigninComponent,
    SigninFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
