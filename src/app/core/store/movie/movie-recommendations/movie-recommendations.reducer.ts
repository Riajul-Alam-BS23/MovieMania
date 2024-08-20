import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './movie-recommendations.actions'
import { initialState } from './movie-recommendations.state';

const _movieRecommendationsReducer = createReducer(
    initialState,
    on(MovieActions.loadRecommendationsMovies, state => ({
        ...state,
        loading: true
    })),
    on(MovieActions.loadRecommendationsMoviesSuccess, (state, { movies }) => ({
        ...state,
        movies,
        loading: false
    })),
    on(MovieActions.loadRecommendationsMoviesFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);

export function movieRecommendationsReducer(state,action){
    return _movieRecommendationsReducer(state, action);
}


