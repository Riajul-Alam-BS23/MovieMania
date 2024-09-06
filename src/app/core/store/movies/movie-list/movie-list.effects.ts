import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { Movie } from '../../../models/api/MovieResponse';
import { MovieListsActions } from './movie-list.actions';

@Injectable()
export class MovieListsEffects {
    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ) { }

    loadListsMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MovieListsActions.loadListsMovies),
            switchMap(({ movies }) =>
                this.movieService.getFiltersData(movies).pipe(
                    tap(() => {
                        console.log(`Loading  Lists Movies for testing`);
                    }),
                    map((response: PaginationResponse<Movie[]>) =>{
                        if(!response){
                            throw new Error('No data returned');
                        }
                        if (!Array.isArray(response.results)) {
                            throw new Error('Unexpected data type');
                        }
                       return MovieListsActions.loadListsMoviesSuccess({ movies: response })
                    } 
                        
                    ),
                    catchError(error => 
                        of(MovieListsActions.loadListsMoviesFailure({ error: error.message }))
                    )
                )
            )
        )
    );
}
