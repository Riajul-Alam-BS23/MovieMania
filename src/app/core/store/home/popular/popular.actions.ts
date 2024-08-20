import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';

export const loadPopularMovies = createAction(
    '[Popular] Load Trending Movies',
    props<{period:string }>()
);

export const loadPopularMoviesSuccess = createAction(
    '[Popular] Load Trending Movies Success',
    props<{ movies: Movie[] }>()
);

export const loadPopularMoviesFailure = createAction(
    '[Popular] Load Trending Movies Failure',
    props<{ error: string }>()
);

