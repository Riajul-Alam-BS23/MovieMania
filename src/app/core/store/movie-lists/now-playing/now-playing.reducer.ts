import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './now-playing.actions'
import { initialState } from './now-playing.state';

const _movieNowPlayingListsReducer = createReducer(
    initialState,
    on(MovieActions.loadNowPlayingListsMovies, state => ({
        ...state,
        loading: true
    })),
    on(MovieActions.loadNowPlayingListsMoviesSuccess, (state, { movies }) => ({
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
    on(MovieActions.loadNowPlayingListsMoviesFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);

export function movieNowPlayingListsReducer(state,action){
    return _movieNowPlayingListsReducer(state, action);
}


