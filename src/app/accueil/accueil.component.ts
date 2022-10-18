import { Component, OnInit } from '@angular/core';
import {Movie} from "../../models/movie";
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  indexSelected?: number;
  movieSelected?: Movie;
  movies: Movie[]=[];

  onSelected(i: number) {
    if (this.indexSelected === i && this.movieSelected !== undefined) {
      this.movieSelected = undefined;
    } else {
      this.indexSelected = i;
      this.movieSelected = this.movies[i]
    }
  }

  constructor( private _moviesService : MoviesService) { }

  ngOnInit(): void {
    this.movies = this._moviesService.getMovies();
  }

}
