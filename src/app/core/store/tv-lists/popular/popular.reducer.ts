import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './popular.actions'
import { initialState } from './popular.state';

const _tvPopularListsReducer = createReducer(
    initialState,
    on(MovieActions.loadPopularListsTv, state => ({
        ...state,
        loading: true
    })),
    on(MovieActions.loadPopularListsTvSuccess, (state, { movies }) => ({
        ...state,
        movies:[
             ...state.movies,
             ...movies
        ],
        loading: false
    })),
    on(MovieActions.loadPopularListsTvFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);

export function tvPopularListsReducer(state,action){
    return _tvPopularListsReducer(state, action);
}


