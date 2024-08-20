


import { MovieDetailsEffects } from "./movie-details/movie-details.effects";
import { movieDetailsReducer } from "./movie-details/movie-details.reducer";
import { MovieDetailsState } from "./movie-details/movie-details.state";
import { MovieRecommendationsEffects } from "./movie-recommendations/movie-recommendations.effects";
import { movieRecommendationsReducer } from "./movie-recommendations/movie-recommendations.reducer";
import { MovieRecommendationsState } from "./movie-recommendations/movie-recommendations.state";

export interface MovieState{
    MOVIE_DETAILS_STATE_NAME: MovieDetailsState,
    Recommendations_MOVIE_STATE_NAME: MovieRecommendationsState
}

export const movieReducer ={
    MOVIE_DETAILS_STATE_NAME: movieDetailsReducer,
    Recommendations_MOVIE_STATE_NAME: movieRecommendationsReducer
};

export const MovieEffects=[MovieDetailsEffects,MovieRecommendationsEffects];



