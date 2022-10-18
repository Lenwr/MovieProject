import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIMoviesComponent } from './accueil/api-movies/api-movies.component';
import { MoviesDetailsComponent } from './accueil/movies-details/movies-details.component';
import { MovieComponent } from './accueil/movie/movie.component';
import { NavbarComponent } from './accueil/navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { AccueilComponent } from './accueil/accueil.component';


@NgModule({
  declarations: [
    AppComponent,
    APIMoviesComponent,
    MoviesDetailsComponent,
    MovieComponent,
    NavbarComponent,
    AccueilComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
