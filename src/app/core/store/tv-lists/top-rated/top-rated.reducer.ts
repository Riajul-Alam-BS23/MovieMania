import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './top-rated.actions'
import { initialState } from './top-rated.state';

const _tvTopRatedListsReducer = createReducer(
    initialState,
    on(MovieActions.loadTopRatedListsTv, state => ({
        ...state,
        loading: true
    })),
    on(MovieActions.loadTopRatedListsTvSuccess, (state, { movies }) => ({
        ...state,
        movies:[
             ...state.movies,
             ...movies
        ],
        loading: false
    })),
    on(MovieActions.loadTopRatedListsTvFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);

export function tvTopRatedListsReducer(state,action){
    return _tvTopRatedListsReducer(state, action);
}


