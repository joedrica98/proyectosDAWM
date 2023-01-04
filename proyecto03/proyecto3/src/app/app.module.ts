import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { HttpClientModule } from "@angular/common/http";
import { AnimeDetailComponent } from './anime/anime-detail/anime-detail.component';
import { AnimeStatisticsComponent } from './anime/anime-statistics/anime-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimeListComponent,
    AnimeDetailComponent,
    AnimeStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
