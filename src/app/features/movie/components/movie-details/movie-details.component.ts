import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectMovieDetails } from '../../../../core/store/movie/movie-details/movie-details.selectors';
import { Movie } from '../../../../core/models/api/MovieResponse';
import { Observable } from 'rxjs';
import { MovieDetails } from '../../../../core/models/api/MovieDetailsResponse';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie$: Observable<MovieDetails>;
  constructor(private store:Store, private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    console.log("Movie Details")
    this.movie$= this.store.select(selectMovieDetails);
    console.log("Movie ",this.movie$)
    // this.router.navigate(['/details',718821]);

  }
}
