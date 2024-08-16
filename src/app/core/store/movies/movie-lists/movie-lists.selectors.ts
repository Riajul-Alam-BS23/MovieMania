import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieListsState } from './movie-lists.state';
import { MoviesState } from '../movies.state';


export const MOVIE_LISTS_STATE_NAME = 'lists';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectMoviesListsState = createSelector(
    selectMoviesState,
    (state: MoviesState) => state.MOVIE_LISTS_STATE_NAME
);


// export const selectTrendingMovieState = createFeatureSelector<TrendingMovieState>(Trending_MOVIE_STATE_NAME);


export const selectMoviesLists = createSelector(
    selectMoviesListsState,
    (state: MovieListsState) => state.movies
);

export const selectMoviesListsLoading = createSelector(
    selectMoviesListsState,
    (state: MovieListsState) => state.loading
);

export const selectMoviesListsError = createSelector(
    selectMoviesListsState,
    (state: MovieListsState) => state.error
);
