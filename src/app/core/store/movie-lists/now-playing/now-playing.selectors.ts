import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieNowPlayingListsState } from './now-playing.state';
import { MoviesState } from '../../movies/movies.state';


export const MOVIE_NOW_PLAYING_LISTS_STATE_NAME = 'movie-now-playing-lists';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectMoviesNowPlayingListsState = createSelector(
    selectMoviesState,
    (state: MoviesState) => state.MOVIE_NOW_PLAYING_LISTS_STATE_NAME
);


// export const selectTrendingMovieState = createFeatureSelector<TrendingMovieState>(Trending_MOVIE_STATE_NAME);


export const selectMoviesNowPlayingLists = createSelector(
    selectMoviesNowPlayingListsState,
    (state: MovieNowPlayingListsState) => state.movies
);

export const selectMoviesNowPlayingListsLoading = createSelector(
    selectMoviesNowPlayingListsState,
    (state: MovieNowPlayingListsState) => state.loading
);

export const selectMoviesNowPlayingListsError = createSelector(
    selectMoviesNowPlayingListsState,
    (state: MovieNowPlayingListsState) => state.error
);
