import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MoviePopularListsState } from './popular.state';
import { MoviesState } from '../../movies/movies.state';


export const MOVIE_POPULAR_LISTS_STATE_NAME = 'movie-popular-lists';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectMoviesListsState = createSelector(
    selectMoviesState,
    (state: MoviesState) => state.MOVIE_POPULAR_LISTS_STATE_NAME
);


// export const selectTrendingMovieState = createFeatureSelector<TrendingMovieState>(Trending_MOVIE_STATE_NAME);


export const selectMoviesPopularLists = createSelector(
    selectMoviesListsState,
    (state: MoviePopularListsState) => state.movies
);

export const selectMoviesPopularListsLoading = createSelector(
    selectMoviesListsState,
    (state: MoviePopularListsState) => state.loading
);

export const selectMoviesPopularListsError = createSelector(
    selectMoviesListsState,
    (state: MoviePopularListsState) => state.error
);
