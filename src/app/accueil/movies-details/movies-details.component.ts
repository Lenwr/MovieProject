import {Component, Input, OnInit} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import {Movie} from 'src/models/movie';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {movies} from "../../../movies";


@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  movie?: Movie;
  // @Input() index?: number;

  //definition d type de l input
  /*injection de dependance*/
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // /users/1
    // /users/:id
    // id est un param comme pour nodejs
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Maniere 1
      // const id = +params.get("id");

      const id = params.get("id");
      if (id == null) return;

      // ParseInt convertir number to string
      const index: number = parseInt(id);
      this.movie = movies[index];
    });
  }

}
