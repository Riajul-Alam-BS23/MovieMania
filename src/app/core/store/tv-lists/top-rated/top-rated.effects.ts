import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MovieActions from './top-rated.actions';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { Movie } from '../../../models/api/MovieResponse';

@Injectable()
export class TvTopRatedListsEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ) { }

    loadTopRatedListsTv$ = createEffect(() =>
        this.actions$.pipe(
          ofType(MovieActions.loadTopRatedListsTv),
          mergeMap(({ movies }) =>
            this.movieService.getListsMovies(movies).pipe(
              tap(()=>{
                console.log(`Loading Lists Movies for`);
              }),
              map((response: PaginationResponse<Movie[]>) => MovieActions.loadTopRatedListsTvSuccess({ movies: response })),
              catchError(error => of(MovieActions.loadTopRatedListsTvFailure({ error: error.message })))
            )
          )
        )
      );
}
