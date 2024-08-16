

import { MovieListsEffects } from "./movie-lists/movie-lists.effects";
import { movieListsReducer } from "./movie-lists/movie-lists.reducer";
import { MovieListsState } from "./movie-lists/movie-lists.state";

export interface MoviesState{
    MOVIE_LISTS_STATE_NAME: MovieListsState
}

export const moviesReducer ={
    MOVIE_LISTS_STATE_NAME: movieListsReducer
};

export const MoviesEffects=[MovieListsEffects];



