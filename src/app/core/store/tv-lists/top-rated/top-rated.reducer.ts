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
        movies: {
            ...state.movies,
            page: movies.page,
            results: [...state.movies.results, ...movies.results],
            total_pages: movies.total_pages,
            total_results: movies.total_results,
        },

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


