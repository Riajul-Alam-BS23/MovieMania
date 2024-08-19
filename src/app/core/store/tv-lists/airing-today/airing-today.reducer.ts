import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './airing-today.actions'
import { initialState } from './airing-today.state';

const _tvAiringTodayListsReducer = createReducer(
    initialState,
    on(MovieActions.loadAiringTodayListsTv, state => ({
        ...state,
        loading: true
    })),
    on(MovieActions.loadAiringTodayListsTvSuccess, (state, { movies }) => ({
        ...state,
        movies:[
             ...state.movies,
             ...movies
        ],
        loading: false
    })),
    on(MovieActions.loadAiringTodayListsTvFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);

export function tvAiringTodayListsReducer(state,action){
    return _tvAiringTodayListsReducer(state, action);
}


