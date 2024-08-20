import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './popular.actions';
import { initialState } from './popular.state';

const _popularMovieReducer = createReducer(
    initialState,
    on(MovieActions.loadPopularMovies, state => ({
        ...state,
        loading: true
    })),
    on(MovieActions.loadPopularMoviesSuccess, (state, { movies }) => ({
        ...state,
        movies,
        loading: false
    })),
    on(MovieActions.loadPopularMoviesFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);

export function popularMovieReducer(state,action){
    return _popularMovieReducer(state, action);
}


