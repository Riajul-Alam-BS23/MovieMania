import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './popular.actions'
import { initialState } from './popular.state';

const _moviePopularListsReducer = createReducer(
    initialState,
    on(MovieActions.loadPopularListsMovies, state => ({
        ...state,
        loading: true
    })),
    on(MovieActions.loadPopularListsMoviesSuccess, (state, { movies }) => ({
        ...state,
        movies:[
             ...state.movies,
             ...movies
        ],
        loading: false
    })),
    on(MovieActions.loadPopularListsMoviesFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);

export function moviePopularListsReducer(state,action){
    return _moviePopularListsReducer(state, action);
}


