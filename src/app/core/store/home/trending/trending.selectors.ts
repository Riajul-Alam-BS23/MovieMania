import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TrendingMovieState } from './trending.state';
import { HomeState } from '../home.state';

export const Trending_MOVIE_STATE_NAME = 'trending';

export const selectHomeState = createFeatureSelector<HomeState>('home');

export const selectTrendingMovieState = createSelector(
    selectHomeState,
    (state: HomeState) => state.Trending_MOVIE_STATE_NAME
);


// export const selectTrendingMovieState = createFeatureSelector<TrendingMovieState>(Trending_MOVIE_STATE_NAME);


export const selectTrendingMovies = createSelector(
    selectTrendingMovieState,
    (state: TrendingMovieState) => state.movies
);

export const selectTrendingMoviesLoading = createSelector(
    selectTrendingMovieState,
    (state: TrendingMovieState) => state.loading
);

export const selectTrendingMoviesError = createSelector(
    selectTrendingMovieState,
    (state: TrendingMovieState) => state.error
);
