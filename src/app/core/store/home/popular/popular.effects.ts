import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
import { MovieService } from '../../../services/movie.service';
import * as MovieActions from './popular.actions';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { Movie } from '../../../models/api/MovieResponse';

@Injectable()
export class PopularMovieEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  loadPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadPopularMovies),
      mergeMap((options) =>
      this.movieService.getPopularMovies(options.period).pipe(
       tap(()=>{
          console.log(`Loading Popular Movies for`);
        }),
          map((response: PaginationResponse<Movie[]>) =>
            MovieActions.loadPopularMoviesSuccess({ movies: response.results })
          ),
          catchError((error) =>
            of(MovieActions.loadPopularMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
