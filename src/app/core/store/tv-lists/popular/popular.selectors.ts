import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TvPopularListsState } from './popular.state';
import { MoviesState } from '../../movies/movies.state';


export const TV_POPULAR_LISTS_STATE_NAME = 'tv-popular-lists';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectMoviesListsState = createSelector(
    selectMoviesState,
    (state: MoviesState) => state.TV_POPULAR_LISTS_STATE_NAME
);


// export const selectTrendingMovieState = createFeatureSelector<TrendingMovieState>(Trending_MOVIE_STATE_NAME);


export const selectTvPopularLists = createSelector(
    selectMoviesListsState,
    (state: TvPopularListsState) => state.movies
);

export const selectTvPopularListsLoading = createSelector(
    selectMoviesListsState,
    (state: TvPopularListsState) => state.loading
);

export const selectTvPopularListsError = createSelector(
    selectMoviesListsState,
    (state: TvPopularListsState) => state.error
);
