import { HomeModule } from './pages/home-page/home/home.module';
import { SigninModule } from './pages/signin-page/signin/signin.module';
import { RegisterModule } from './pages/register-page/register/register.module';
import { CharacterModule } from './pages/character-page/character/character.module';
import { ComicModule } from './pages/comic-page/comic/comic.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from './shared/shared/shared.module';
import { ComicsModule } from './pages/comics-page/comics/comics.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavListComponent } from './shared/components/nav-list/nav-list.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { CartItemComponent } from './shared/components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavListComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CharacterModule,
    RegisterModule,
    HomeModule,
    SigninModule,
    ComicsModule,
    ComicModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
