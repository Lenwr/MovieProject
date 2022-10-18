import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/models/movie';


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
  }

}
