import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MovieActions from './movie-lists.actions';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { Movie } from '../../../models/api/MovieResponse';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieListsEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ) { }

    loadListsMovies$ = createEffect(() =>
        this.actions$.pipe(
          ofType(MovieActions.loadListsMovies),
          switchMap(({ movies }) =>
            this.movieService.getListsMovies(movies).pipe(
              tap(()=>{
                console.log(`Loading Lists Movies for`);
              }),
              map((response: PaginationResponse<Movie[]>) => MovieActions.loadListsMoviesSuccess({ movies: response.results })),
              catchError(error => of(MovieActions.loadListsMoviesFailure({ error: error.message })))
            )
          )
        )
      );
    

}
