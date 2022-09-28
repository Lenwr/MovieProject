import { Component, Input, OnInit } from '@angular/core';
import { movies } from '../../movies';
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
      
  constructor() { }

  ngOnInit(): void {
   
  }

}
