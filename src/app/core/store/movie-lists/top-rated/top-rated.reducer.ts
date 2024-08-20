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
        movies: {
            ...state.movies,
            page: movies.page,
            results: [...state.movies.results, ...movies.results],
            total_pages: movies.total_pages,
            total_results: movies.total_results,
        },
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


