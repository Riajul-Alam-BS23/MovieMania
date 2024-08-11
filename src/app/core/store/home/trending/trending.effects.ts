import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MovieActions from './trending.actions';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { Movie } from '../../../models/api/MovieResponse';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrendingMovieEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ) { }

    // loadTrendingMovies$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(MovieActions.loadTrendingMovies),
    //         switchMap(() =>
    //             this.movieService.getTrendingMovies().pipe(
    //                 map((response: PaginationResponse<Movie[]>) => MovieActions.loadTrendingMoviesSuccess({ movies: response.results })),

    //                 catchError(error => of(MovieActions.loadTrendingMoviesFailure({ error: error.message })))
    //             )
    //         )
    //     )
    // );

    loadTrendingMovies$ = createEffect(() =>
        this.actions$.pipe(
          ofType(MovieActions.loadTrendingMovies),
          switchMap(({ period }) =>
            this.movieService.getTrendingMovies(period).pipe(
              map((response: PaginationResponse<Movie[]>) => MovieActions.loadTrendingMoviesSuccess({ movies: response.results })),
              catchError(error => of(MovieActions.loadTrendingMoviesFailure({ error: error.message })))
            )
          )
        )
      );
    

}
