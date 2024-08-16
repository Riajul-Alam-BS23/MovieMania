

import { Component, Input } from '@angular/core';
import { Movie } from '../../core/models/api/MovieResponse';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  
  @Input() movie: Movie;
  title:string;
  date:string;
  rating:number;  
  ngOnInit() : void{
    this.title = this.movie.title || this.movie.name;
    this.date = this.movie.release_date || this.movie.first_air_date;
    this.rating = parseFloat(this.movie.vote_average.toFixed(1)) * 10;
  }
}




