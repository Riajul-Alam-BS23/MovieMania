import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieState } from '../movie.state';
import { MovieRecommendationsState } from './movie-recommendations.state';


export const Recommendations_MOVIE_STATE_NAME = 'recommendations';

export const selectMovieState = createFeatureSelector<MovieState>('movie');

export const selectMovieRecommendationsState = createSelector(
    selectMovieState,
    (state: MovieState) => state.Recommendations_MOVIE_STATE_NAME
);


// export const selectTrendingMovieState = createFeatureSelector<TrendingMovieState>(Trending_MOVIE_STATE_NAME);


export const selectMoviesRecommendations = createSelector(
    selectMovieRecommendationsState,
    (state: MovieRecommendationsState) => state.movies
);

export const selectMoviesRecommendationsLoading = createSelector(
    selectMovieRecommendationsState,
    (state: MovieRecommendationsState) => state.loading
);

export const selectMoviesRecommendationsError = createSelector(
    selectMovieRecommendationsState,
    (state: MovieRecommendationsState) => state.error
);
