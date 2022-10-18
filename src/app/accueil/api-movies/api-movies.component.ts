import { Component, OnInit } from '@angular/core';
import { movies } from '../../../movies';
import { Movie } from '../../../models/movie';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-api-movies',
  templateUrl: './api-movies.component.html',
  styleUrls: ['./api-movies.component.css']
})
export class APIMoviesComponent implements OnInit {

  @Output() selected = new EventEmitter<number>();

  movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
    this.movies = movies;
  }


  movieSelected(i: number){
    this.selected.emit(i);
    //emettre l index qui a ete selectionné
  }

  imageMovie = "https://cps-static.rovicorp.com/2/Open/CinemaSource/Indiana%20Jones%20and%20The%20Raiders%20of%20the%20Lost%20Ark%20%20The%20IMAX%20Experience/_derived_jpg_q90_600x800_m0/140449R1_CR.jpg"

}
