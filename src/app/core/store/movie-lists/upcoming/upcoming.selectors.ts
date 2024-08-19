import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieUpcomingListsState } from './upcoming.state';
import { MoviesState } from '../../movies/movies.state';


export const MOVIE_UPCOMING_LISTS_STATE_NAME = 'movie-upcoming-lists';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectMoviesUpcomingListsState = createSelector(
    selectMoviesState,
    (state: MoviesState) => state.MOVIE_UPCOMING_LISTS_STATE_NAME
);


// export const selectTrendingMovieState = createFeatureSelector<TrendingMovieState>(Trending_MOVIE_STATE_NAME);


export const selectMoviesUpcomingLists = createSelector(
    selectMoviesUpcomingListsState,
    (state: MovieUpcomingListsState) => state.movies
);

export const selectMoviesUpcomingListsLoading = createSelector(
    selectMoviesUpcomingListsState,
    (state: MovieUpcomingListsState) => state.loading
);

export const selectMoviesUpcomingListsError = createSelector(
    selectMoviesUpcomingListsState,
    (state: MovieUpcomingListsState) => state.error
);
