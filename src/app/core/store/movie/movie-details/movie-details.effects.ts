import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as MovieDetailsActions from './movie-details.actions';
import { MovieService } from '../../../services/movie.service';

@Injectable()
export class MovieDetailsEffects {
  loadMovieDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieDetailsActions.loadMovieDetails),
      switchMap(({ details }) =>
        this.movieService.getSingleMovie(details).pipe(
          tap(()=>{
            console.log(`Loading Trending Movies for`);
          }),
          map(movie => MovieDetailsActions.loadMovieDetailsSuccess({ movie:movie })),
          catchError(error => of(MovieDetailsActions.loadMovieDetailsFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}
}
