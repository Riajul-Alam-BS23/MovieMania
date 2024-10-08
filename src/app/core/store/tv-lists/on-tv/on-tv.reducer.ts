import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './on-tv.actions'
import { initialState } from './on-tv.state';

const _tvOnTvListsReducer = createReducer(
    initialState,
    on(MovieActions.loadOnTvListsTv, state => ({
        ...state,
        loading: true
    })),
    on(MovieActions.loadOnTvListsTvSuccess, (state, { movies }) => ({
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
    on(MovieActions.loadOnTvListsTvFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);

export function tvOnTvListsReducer(state,action){
    return _tvOnTvListsReducer(state, action);
}



