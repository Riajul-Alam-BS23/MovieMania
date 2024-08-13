


import { MovieDetailsEffects } from "./movie-details/movie-details.effects";
import { movieDetailsReducer } from "./movie-details/movie-details.reducer";
import { MovieDetailsState } from "./movie-details/movie-details.state";

export interface MovieState{
    MOVIE_DETAILS_STATE_NAME: MovieDetailsState
}

export const movieReducer ={
    MOVIE_DETAILS_STATE_NAME: movieDetailsReducer
};

export const MovieEffects=[MovieDetailsEffects];



