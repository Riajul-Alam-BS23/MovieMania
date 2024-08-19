

import { MovieNowPlayingListsEffects } from "../movie-lists/now-playing/now-playing.effects";
import { movieNowPlayingListsReducer } from "../movie-lists/now-playing/now-playing.reducer";
import { MovieNowPlayingListsState } from "../movie-lists/now-playing/now-playing.state";
import { moviePopularListsReducer } from "../movie-lists/popular/popular.reducer";
import { MoviePopularListsState } from "../movie-lists/popular/popular.state";
import { MovieTopRatedListsEffects } from "../movie-lists/top-rated/top-rated.effects";
import { movieTopRatedListsReducer } from "../movie-lists/top-rated/top-rated.reducer";
import { MovieTopRatedListsState } from "../movie-lists/top-rated/top-rated.state";
import { movieUpcomingListsReducer } from "../movie-lists/upcoming/upcoming.reducer";
import { MovieUpcomingListsState } from "../movie-lists/upcoming/upcoming.state";
import { tvAiringTodayListsReducer } from "../tv-lists/airing-today/airing-today.reducer";
import { TvAiringTodayListsState } from "../tv-lists/airing-today/airing-today.state";
import { tvOnTvListsReducer } from "../tv-lists/on-tv/on-tv.reducer";
import { TvOnTvListsState } from "../tv-lists/on-tv/on-tv.state";
import { TvPopularListsEffects } from "../tv-lists/popular/popular.effects";
import { tvPopularListsReducer } from "../tv-lists/popular/popular.reducer";
import { TvPopularListsState } from "../tv-lists/popular/popular.state";
import { tvTopRatedListsReducer } from "../tv-lists/top-rated/top-rated.reducer";
import { TvTopRatedListsState } from "../tv-lists/top-rated/top-rated.state";
import { MovieListsEffects } from "./movie-lists/movie-lists.effects";
import { movieListsReducer } from "./movie-lists/movie-lists.reducer";
import { MovieListsState } from "./movie-lists/movie-lists.state";

export interface MoviesState{
    MOVIE_LISTS_STATE_NAME: MovieListsState,
    MOVIE_NOW_PLAYING_LISTS_STATE_NAME: MovieNowPlayingListsState,
    MOVIE_POPULAR_LISTS_STATE_NAME:MoviePopularListsState,
    MOVIE_TOP_RATED_LISTS_STATE_NAME:MovieTopRatedListsState,
    MOVIE_UPCOMING_LISTS_STATE_NAME:MovieUpcomingListsState,
    TV_POPULAR_LISTS_STATE_NAME:TvPopularListsState,
    TV_TOP_RATED_LISTS_STATE_NAME:TvTopRatedListsState,
    TV_AIRING_TODAY_LISTS_STATE_NAME:TvAiringTodayListsState,
    TV_ON_TV_LISTS_STATE_NAME:TvOnTvListsState
}



export const moviesReducer ={
    MOVIE_LISTS_STATE_NAME: movieListsReducer,
    MOVIE_NOW_PLAYING_LISTS_STATE_NAME: movieNowPlayingListsReducer,
    MOVIE_POPULAR_LISTS_STATE_NAME:moviePopularListsReducer,
    MOVIE_TOP_RATED_LISTS_STATE_NAME:movieTopRatedListsReducer,
    MOVIE_UPCOMING_LISTS_STATE_NAME:movieUpcomingListsReducer,
    TV_POPULAR_LISTS_STATE_NAME:tvPopularListsReducer,
    TV_TOP_RATED_LISTS_STATE_NAME:tvTopRatedListsReducer,
    TV_AIRING_TODAY_LISTS_STATE_NAME:tvAiringTodayListsReducer,
    TV_ON_TV_LISTS_STATE_NAME:tvOnTvListsReducer
};

export const MoviesEffects=[MovieListsEffects, MovieNowPlayingListsEffects,MovieTopRatedListsEffects,TvPopularListsEffects];



