import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './pages/home-page/item-list/item-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home-page/home/home.component';

@NgModule({
  declarations: [AppComponent, ItemListComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
