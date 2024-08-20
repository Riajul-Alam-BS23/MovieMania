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
        movies: {
            ...state.movies,
            page: movies.page,
            results: [...state.movies.results, ...movies.results],
            total_pages: movies.total_pages,
            total_results: movies.total_results,
        },
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


