import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GenresListsMoviesActions } from './genres.actions';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { Genre } from '../../../models/api/GenreResponse';

@Injectable()
export class MovieGenresListsEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ) { }

    loadGenresListsMovies$ = createEffect(() =>
        this.actions$.pipe(
          ofType(GenresListsMoviesActions.load),
          mergeMap(({ genres }) =>
            this.movieService.getGenres(genres).pipe(
              tap(() => {
                console.log(`Loading Genres Lists Movies for testing`,);
              }),
              map((response: Genre[]) => {
                console.log("Genres Response ==> ",response);
                return GenresListsMoviesActions.loadSuccess({ genres: response })
              }
            ),
              catchError(error => of(GenresListsMoviesActions.loadFailure({ error: error.message })))
            )
          )
        )
    );
}
