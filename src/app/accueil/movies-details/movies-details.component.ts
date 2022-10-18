import {Component, OnInit} from '@angular/core';
import {Movie} from 'src/models/movie';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {MoviesService} from "../../movies.service";


@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  movie?: Movie;
  movies: Movie[]=[];
  // @Input() index?: number;

  //definition d type de l input
  /*injection de dependance*/
  constructor(private route: ActivatedRoute , private _moviesService : MoviesService) {

  }

  ngOnInit(): void {
    this.movies = this._moviesService.getMovies();
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
      this.movie = this.movies[index];
    });
  }

}
