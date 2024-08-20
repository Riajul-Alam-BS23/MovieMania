import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TvOnTvListsState } from './on-tv.state';
import { MoviesState } from '../../movies/movies.state';


export const TV_ON_TV_LISTS_STATE_NAME = 'tv-on-tv-lists';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectTvOnTvListsState = createSelector(
    selectMoviesState,
    (state: MoviesState) => state.TV_ON_TV_LISTS_STATE_NAME
);


// export const selectTrendingMovieState = createFeatureSelector<TrendingMovieState>(Trending_MOVIE_STATE_NAME);


export const selectTvOnTvLists = createSelector(
    selectTvOnTvListsState,
    (state: TvOnTvListsState) => state.movies
);

export const selectTvOnTvListsLoading = createSelector(
    selectTvOnTvListsState,
    (state: TvOnTvListsState) => state.loading
);

export const selectTvOnTvListsError = createSelector(
    selectTvOnTvListsState,
    (state: TvOnTvListsState) => state.error
);
