import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './top-rated.actions'
import { initialState } from './top-rated.state';

const _movieTopRatedListsReducer = createReducer(
    initialState,
    on(MovieActions.loadTopRatedListsMovies, state => ({
        ...state,
        loading: true
    })),
    on(MovieActions.loadTopRatedListsMoviesSuccess, (state, { movies }) => ({
        ...state,
        movies:[
             ...state.movies,
             ...movies
        ],
        loading: false
    })),
    on(MovieActions.loadTopRatedListsMoviesFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);

export function movieTopRatedListsReducer(state,action){
    return _movieTopRatedListsReducer(state, action);
}


