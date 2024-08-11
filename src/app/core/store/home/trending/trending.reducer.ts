import { createReducer, on } from '@ngrx/store';
// import { loadTrendingMovies, loadTrendingMoviesSuccess, loadTrendingMoviesFailure } from './movie.actions';
import {initialState } from './trending.state';
import * as MovieActions from './trending.actions';

const _trendingMovieReducer = createReducer(
    initialState,
    on(MovieActions.loadTrendingMovies, state => ({
        ...state,
        loading: true
    })),
    on(MovieActions.loadTrendingMoviesSuccess, (state, { movies }) => ({
        ...state,
        movies,
        loading: false
    })),
    on(MovieActions.loadTrendingMoviesFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);

export function trendingMovieReducer(state,action){
    return _trendingMovieReducer(state, action);
}


