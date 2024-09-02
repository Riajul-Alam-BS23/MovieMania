import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { Movie } from '../../../models/api/MovieResponse';
import { TvListsActions } from './tv-list.actions';

@Injectable()
export class TvListsEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ) { }

    loadListsTvs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TvListsActions.loadListsTvs),
            switchMap(({ tvs }) =>
                this.movieService.getFiltersData(tvs).pipe(
                    tap(() => {
                        console.log(`Loading  Lists Tvs for testing`);
                    }),
                    map((response: PaginationResponse<Movie[]>) => 
                        TvListsActions.loadListsTvsSuccess({ Tvs: response })
                    ),
                    catchError(error => 
                        of(TvListsActions.loadListsTvsFailure({ error: error.message }))
                    )
                )
            )
        )
    );
}
