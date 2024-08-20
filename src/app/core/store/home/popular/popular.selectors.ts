import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PopularMovieState } from './popular.state';
import { HomeState } from '../home.state';

export const Popular_MOVIE_STATE_NAME = 'popular';

export const selectHomeState=createFeatureSelector<HomeState>('home');

export const selectPopularMovieState = createSelector(
    selectHomeState,
    (state: HomeState) => state.Popular_MOVIE_STATE_NAME 
);

// export const selectPopularMovieState = createFeatureSelector<PopularMovieState>(Popular_MOVIE_STATE_NAME);



export const selectPopularMovies = createSelector(
    selectPopularMovieState,
    (state: PopularMovieState) => {
        return state.movies;
    }
);

export const selectPopularMoviesLoading = createSelector(
    selectPopularMovieState,
    (state: PopularMovieState) => state.loading
);

export const selectPopularMoviesError = createSelector(
    selectPopularMovieState,
    (state: PopularMovieState) => state.error
);





