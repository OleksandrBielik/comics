import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './pages/home-page/item-list/item-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { ItemInfoComponent } from './pages/home-page/item-info/item-info.component';
import { ComicComponent } from './pages/comic-page/comic/comic.component';
import { RandomCharacterComponent } from './pages/home-page/random-character/random-character.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    HeaderComponent,
    HomeComponent,
    ItemInfoComponent,
    ComicComponent,
    RandomCharacterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
