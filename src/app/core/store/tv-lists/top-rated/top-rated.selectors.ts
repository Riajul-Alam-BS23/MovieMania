import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TvTopRatedListsState } from './top-rated.state';
import { MoviesState } from '../../movies/movies.state';


export const TV_TOP_RATED_LISTS_STATE_NAME = 'tv-top-rated-lists';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectMoviesListsState = createSelector(
    selectMoviesState,
    (state: MoviesState) => state.TV_TOP_RATED_LISTS_STATE_NAME
);


// export const selectTrendingMovieState = createFeatureSelector<TrendingMovieState>(Trending_MOVIE_STATE_NAME);


export const selectTvTopRatedLists = createSelector(
    selectMoviesListsState,
    (state: TvTopRatedListsState) => state.movies
);

export const selectTvTopRatedListsLoading = createSelector(
    selectMoviesListsState,
    (state: TvTopRatedListsState) => state.loading
);

export const selectTvTopRatedListsError = createSelector(
    selectMoviesListsState,
    (state: TvTopRatedListsState) => state.error
);
