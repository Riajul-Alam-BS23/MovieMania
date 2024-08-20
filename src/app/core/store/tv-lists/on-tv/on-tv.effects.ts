import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MovieActions from './on-tv.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { Movie } from '../../../models/api/MovieResponse';

@Injectable()
export class TvOnTvListsEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ) { }

    loadOnTvListsTv$ = createEffect(() =>
        this.actions$.pipe(
          ofType(MovieActions.loadOnTvListsTv),
          switchMap(({ movies }) =>
            this.movieService.getListsMovies(movies).pipe(
              tap(()=>{
                console.log(`Loading Lists Movies for`);
              }),
              map((response: PaginationResponse<Movie[]>) => MovieActions.loadOnTvListsTvSuccess({ movies: response })),
              catchError(error => of(MovieActions.loadOnTvListsTvFailure({ error: error.message })))
            )
          )
        )
    );
    

}
