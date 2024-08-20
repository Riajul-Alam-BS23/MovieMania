import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './upcoming.actions'
import { initialState } from './upcoming.state';

const _movieUpcomingListsReducer = createReducer(
    initialState,
    on(MovieActions.loadUpcomingListsMovies, state => ({
        ...state,
        loading: true
    })),
    on(MovieActions.loadUpcomingListsMoviesSuccess, (state, { movies }) => ({
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
    on(MovieActions.loadUpcomingListsMoviesFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);

export function movieUpcomingListsReducer(state,action){
    return _movieUpcomingListsReducer(state, action);
}



