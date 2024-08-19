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
        movies:[
             ...state.movies,
             ...movies
        ],
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


