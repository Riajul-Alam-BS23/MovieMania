import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GenresListsTvsActions } from './genres.actions';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { Genre } from '../../../models/api/GenreResponse';

@Injectable()
export class TvGenresListsEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ) { }

    loadGenresListsTvs$ = createEffect(() =>
        this.actions$.pipe(
          ofType(GenresListsTvsActions.load),
          mergeMap(({ genres }) =>
            this.movieService.getGenres(genres).pipe(
              tap(() => {
                console.log(`Loading Genres Lists Movies for testing`,);
              }),
              map((response: Genre[]) => {
                console.log("Genres Response ==> ",response);
                return GenresListsTvsActions.loadSuccess({ genres: response })
              }
            ),
              catchError(error => of(GenresListsTvsActions.loadFailure({ error: error.message })))
            )
          )
        )
    );
}
