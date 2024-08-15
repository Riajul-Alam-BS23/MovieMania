import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectMovieDetails } from '../../../../core/store/movie/movie-details/movie-details.selectors';
import { Movie } from '../../../../core/models/api/MovieResponse';
import { map, Observable } from 'rxjs';
import { MovieDetails } from '../../../../core/models/api/MovieDetailsResponse';
import { selectMoviesRecommendations } from '../../../../core/store/movie/movie-recommendations/movie-recommendations.selectors';
import { loadRecommendationsMovies } from '../../../../core/store/movie/movie-recommendations/movie-recommendations.actions';
import { DetailsType } from '../../../../core/models/types/DetailsType';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie$: Observable<MovieDetails>;
  moviesRecommendations$: Observable<Movie[]>;
  constructor(private store:Store, 
    private route:ActivatedRoute,
    private router:Router
  ) { }
  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const movies:DetailsType={
      media_type: type,
      id: id
    }
    this.movie$= this.store.select(selectMovieDetails);
    this.store.dispatch(loadRecommendationsMovies({movies: movies}));
    this.moviesRecommendations$= this.store.select(selectMoviesRecommendations);
  }
}