import { Component } from '@angular/core';
import { movies } from 'src/movies';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  indexSelected?: number;
  movieSelected?: Movie;

  onSelected(i: number) {
    this.indexSelected = i;
      this.movieSelected = movies[i]
  }

}
