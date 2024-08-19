import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieTopRatedListsState } from './top-rated.state';
import { MoviesState } from '../../movies/movies.state';


export const MOVIE_TOP_RATED_LISTS_STATE_NAME = 'movie-top-rated-lists';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectMoviesListsState = createSelector(
    selectMoviesState,
    (state: MoviesState) => state.MOVIE_TOP_RATED_LISTS_STATE_NAME
);


// export const selectTrendingMovieState = createFeatureSelector<TrendingMovieState>(Trending_MOVIE_STATE_NAME);


export const selectMoviesTopRatedLists = createSelector(
    selectMoviesListsState,
    (state: MovieTopRatedListsState) => state.movies
);

export const selectMoviesTopRatedListsLoading = createSelector(
    selectMoviesListsState,
    (state: MovieTopRatedListsState) => state.loading
);

export const selectMoviesTopRatedListsError = createSelector(
    selectMoviesListsState,
    (state: MovieTopRatedListsState) => state.error
);
