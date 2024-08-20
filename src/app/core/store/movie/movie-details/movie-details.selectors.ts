

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieDetailsState } from './movie-details.state';
import { MovieState } from '../movie.state';


export const MOVIE_DETAILS_STATE_NAME = 'movie-details';
export const selectMovieState=createFeatureSelector<MovieState>('movie');

export const selectMovieDetailsState = createSelector(
    selectMovieState,
    (state: MovieState) => state.MOVIE_DETAILS_STATE_NAME
);


export const selectMovieDetails = createSelector(
    selectMovieDetailsState,
    (state: MovieDetailsState) => {
        return state.movie;
    }
);

export const selectMovieDetailsLoading = createSelector(
    selectMovieDetailsState,
    (state: MovieDetailsState) => state.loading
);

export const selectMovieDetailsError = createSelector(
    selectMovieDetailsState,
    (state: MovieDetailsState) => state.error
);
