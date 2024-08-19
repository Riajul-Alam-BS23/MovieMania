import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MovieActions from './airing-today.actions';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { Movie } from '../../../models/api/MovieResponse';

@Injectable()
export class TvAiringTodayListsEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ) { }

    loadAiringTodayListsTv$ = createEffect(() =>
        this.actions$.pipe(
          ofType(MovieActions.loadAiringTodayListsTv),
          switchMap(({ movies }) =>
            this.movieService.getListsMovies(movies).pipe(
              tap(()=>{
                console.log(`Loading Lists Movies for`);
              }),
              map((response: PaginationResponse<Movie[]>) => MovieActions.loadAiringTodayListsTvSuccess({ movies: response.results })),
              catchError(error => of(MovieActions.loadAiringTodayListsTvFailure({ error: error.message })))
            )
          )
        )
    );
    

}
