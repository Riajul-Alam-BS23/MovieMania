import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './movie-lists.actions'
import { initialState } from './movie-lists.state';

const _movieListsReducer = createReducer(
    initialState,
    on(MovieActions.loadListsMovies, state => ({
        ...state,
        loading: true
    })),
    on(MovieActions.loadListsMoviesSuccess, (state, { movies }) => ({
        ...state,
        movies:[
             ...state.movies,
             ...movies
            ],
        loading: false
    })),
    on(MovieActions.loadListsMoviesFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);

export function movieListsReducer(state,action){
    return _movieListsReducer(state, action);
}


