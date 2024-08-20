import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TvAiringTodayListsState } from './airing-today.state';
import { MoviesState } from '../../movies/movies.state';


export const TV_AIRING_TODAY_LISTS_STATE_NAME = 'tv-airing-today-lists';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectTvAiringTodayListsState = createSelector(
    selectMoviesState,
    (state: MoviesState) => state.TV_AIRING_TODAY_LISTS_STATE_NAME
);


// export const selectTrendingMovieState = createFeatureSelector<TrendingMovieState>(Trending_MOVIE_STATE_NAME);


export const selectTvAiringTodayLists = createSelector(
    selectTvAiringTodayListsState,
    (state: TvAiringTodayListsState) => state.movies
);

export const selectTvAiringTodayListsLoading = createSelector(
    selectTvAiringTodayListsState,
    (state: TvAiringTodayListsState) => state.loading
);

export const selectTvAiringTodayListsError = createSelector(
    selectTvAiringTodayListsState,
    (state: TvAiringTodayListsState) => state.error
);
