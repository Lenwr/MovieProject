import { Component, OnInit } from '@angular/core';
import {Movie} from "../../models/movie";
import {movies} from "../../movies";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  indexSelected?: number;
  movieSelected?: Movie;

  onSelected(i: number) {
    if (this.indexSelected === i && this.movieSelected !== undefined) {
      this.movieSelected = undefined;
    } else {
      this.indexSelected = i;
      this.movieSelected = movies[i]
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
