

import { createReducer, on } from '@ngrx/store';
import * as MovieDetailsActions from './movie-details.actions';
import { MovieDetailsState, initialMovieDetailsState } from './movie-details.state';

const _movieDetailsReducer = createReducer(
  initialMovieDetailsState,
  on(MovieDetailsActions.loadMovieDetails, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MovieDetailsActions.loadMovieDetailsSuccess, (state, { movie }) => ({
    ...state,
    movie,
    loading: false,
    error: null,
  })),
  on(MovieDetailsActions.loadMovieDetailsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function movieDetailsReducer(state,action){
    return _movieDetailsReducer(state, action);
}

