import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';

export const loadTrendingMovies = createAction(
    '[Trending] Load Trending Movies',
    props<{period:string }>()
);

export const loadTrendingMoviesSuccess = createAction(
    '[Trending] Load Trending Movies Success',
    props<{ movies: Movie[] }>()
);

export const loadTrendingMoviesFailure = createAction(
    '[Trending] Load Trending Movies Failure',
    props<{ error: string }>()
);

