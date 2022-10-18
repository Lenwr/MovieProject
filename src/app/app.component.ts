import {Component} from '@angular/core';
import {movies} from 'src/movies';
import {Movie} from '../models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  // onSelected(i: number) {
  //   if (this.indexSelected === i && this.movieSelected !== undefined){
  //     this.movieSelected = undefined;
  //   } else {
  //     this.indexSelected = i;
  //     this.movieSelected = movies[i]
  //   }
  // }

}
