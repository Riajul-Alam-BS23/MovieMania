import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MovieActions from './top-rated.actions';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { Movie } from '../../../models/api/MovieResponse';

@Injectable()
export class MovieTopRatedListsEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ) { }

    loadTopRatedListsMovies$ = createEffect(() =>
        this.actions$.pipe(
          ofType(MovieActions.loadTopRatedListsMovies),
          mergeMap(({ movies }) =>
            this.movieService.getListsMovies(movies).pipe(
              tap(()=>{
                console.log(`Loading Lists Movies for`);
              }),
              map((response: PaginationResponse<Movie[]>) => MovieActions.loadTopRatedListsMoviesSuccess({ movies: response })),
              catchError(error => of(MovieActions.loadTopRatedListsMoviesFailure({ error: error.message })))
            )
          )
        )
      );
    

}
