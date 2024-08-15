import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MovieActions from './movie-recommendations.actions';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { Movie } from '../../../models/api/MovieResponse';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieRecommendationsEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ) { }

    loadTrendingMovies$ = createEffect(() =>
        this.actions$.pipe(
          ofType(MovieActions.loadRecommendationsMovies),
          switchMap(({ movies }) =>
            this.movieService.getRecommendationsMovies(movies).pipe(
              tap(()=>{
                console.log(`Loading Trending Movies for`);
              }),
              map((response: PaginationResponse<Movie[]>) => MovieActions.loadRecommendationsMoviesSuccess({ movies: response.results })),
              catchError(error => of(MovieActions.loadRecommendationsMoviesFailure({ error: error.message })))
            )
          )
        )
      );
    

}
