

import { combineReducers, createFeature } from "@ngrx/store";
import { MovieGenresListsEffects } from "../filters/genres/genres.effects";
import { genresListsMoviesFeature } from "../filters/genres/genres.state";
import { MovieGenresListsState } from "../filters/genres/genres.state";
import { MovieNowPlayingListsEffects } from "../movie-lists/now-playing/now-playing.effects";
import { movieNowPlayingListsReducer } from "../movie-lists/now-playing/now-playing.reducer";
import { MovieNowPlayingListsState } from "../movie-lists/now-playing/now-playing.state";
import { MoviePopularListsEffects } from "../movie-lists/popular/popular.effects";
import { moviePopularListsReducer } from "../movie-lists/popular/popular.reducer";
import { MoviePopularListsState } from "../movie-lists/popular/popular.state";
import { MovieTopRatedListsEffects } from "../movie-lists/top-rated/top-rated.effects";
import { movieTopRatedListsReducer } from "../movie-lists/top-rated/top-rated.reducer";
import { MovieTopRatedListsState } from "../movie-lists/top-rated/top-rated.state";
import { MovieUpcomingListsEffects } from "../movie-lists/upcoming/upcoming.effects";
import { movieUpcomingListsReducer } from "../movie-lists/upcoming/upcoming.reducer";
import { MovieUpcomingListsState } from "../movie-lists/upcoming/upcoming.state";
import { TvAiringTodayListsEffects } from "../tv-lists/airing-today/airing-today.effects";
import { tvAiringTodayListsReducer } from "../tv-lists/airing-today/airing-today.reducer";
import { TvAiringTodayListsState } from "../tv-lists/airing-today/airing-today.state";
import { TvOnTvListsEffects } from "../tv-lists/on-tv/on-tv.effects";
import { tvOnTvListsReducer } from "../tv-lists/on-tv/on-tv.reducer";
import { TvOnTvListsState } from "../tv-lists/on-tv/on-tv.state";
import { TvPopularListsEffects } from "../tv-lists/popular/popular.effects";
import { tvPopularListsReducer } from "../tv-lists/popular/popular.reducer";
import { TvPopularListsState } from "../tv-lists/popular/popular.state";
import { TvTopRatedListsEffects } from "../tv-lists/top-rated/top-rated.effects";
import { tvTopRatedListsReducer } from "../tv-lists/top-rated/top-rated.reducer";
import { TvTopRatedListsState } from "../tv-lists/top-rated/top-rated.state";
import { MovieListsEffects } from "./movie-list/movie-list.effects";
import { movieListsFeature, MovieListsState } from "./movie-list/movie-list.state";
import { TvListsEffects } from "./tv-list/tv-list.effects";
import { tvListsFeature, TvListsState } from "./tv-list/tv-list.state";
import { TvGenresListsEffects } from "../filters/tv-genres/genres.effects";

export interface MoviesState{
    MOVIE_NOW_PLAYING_LISTS_STATE_NAME: MovieNowPlayingListsState,
    MOVIE_POPULAR_LISTS_STATE_NAME:MoviePopularListsState,
    MOVIE_TOP_RATED_LISTS_STATE_NAME:MovieTopRatedListsState,
    MOVIE_UPCOMING_LISTS_STATE_NAME:MovieUpcomingListsState,
    TV_POPULAR_LISTS_STATE_NAME:TvPopularListsState,
    TV_TOP_RATED_LISTS_STATE_NAME:TvTopRatedListsState,
    TV_AIRING_TODAY_LISTS_STATE_NAME:TvAiringTodayListsState,
    TV_ON_TV_LISTS_STATE_NAME:TvOnTvListsState,
    MOVIE_GENRES_LISTS_STATE_NAME: MovieGenresListsState,
    MOVIE_LISTS_STATE_NAME:MovieListsState,
    TV_LISTS_STATE_NAME: TvListsState
}



export const moviesReducer ={
    MOVIE_NOW_PLAYING_LISTS_STATE_NAME: movieNowPlayingListsReducer,
    MOVIE_POPULAR_LISTS_STATE_NAME:moviePopularListsReducer,
    MOVIE_TOP_RATED_LISTS_STATE_NAME:movieTopRatedListsReducer,
    MOVIE_UPCOMING_LISTS_STATE_NAME:movieUpcomingListsReducer,
    TV_POPULAR_LISTS_STATE_NAME:tvPopularListsReducer,
    TV_TOP_RATED_LISTS_STATE_NAME:tvTopRatedListsReducer,
    TV_AIRING_TODAY_LISTS_STATE_NAME:tvAiringTodayListsReducer,
    TV_ON_TV_LISTS_STATE_NAME:tvOnTvListsReducer,
    // MOVIE_GENRES_LISTS_STATE_NAME: genresListsMoviesFeature.reducer,
    // MOVIE_LISTS_STATE_NAME: movieListsFeature.reducer,
    // TV_LISTS_STATE_NAME:tvListsFeature.reducer
};

export const MoviesEffects=[
    MoviePopularListsEffects,
    MovieNowPlayingListsEffects,
    MovieTopRatedListsEffects,
    MovieUpcomingListsEffects,
    TvPopularListsEffects,
    TvAiringTodayListsEffects,
    TvOnTvListsEffects,
    TvTopRatedListsEffects,
    MovieGenresListsEffects,
    TvGenresListsEffects,
    MovieListsEffects,
    TvListsEffects
];

// export const combinedFeature = createFeature({
//     name: 'combined',
//     reducer: combineReducers({
//       genresListsMovies: genresListsMoviesFeature.reducer,
//       movieLists: movieListsFeature.reducer,
//       tvLists: tvListsFeature.reducer,
//     }),
//   });




// export interface MoviesState1 {
//     // nowPlaying: MovieNowPlayingListsState;
//     // popularMovies: MoviePopularListsState;
//     // topRatedMovies: MovieTopRatedListsState;
//     // upcomingMovies: MovieUpcomingListsState;
//     // popularTV: TvPopularListsState;
//     // topRatedTV: TvTopRatedListsState;
//     // airingTodayTV: TvAiringTodayListsState;
//     // onTv: TvOnTvListsState;
//     genres: MovieGenresListsState;
//     movieLists: MovieListsState;
//     tvLists: TvListsState;
// }

// import { ActionReducerMap } from '@ngrx/store';

// export const moviesReducer1: ActionReducerMap<MoviesState1> = {
// //   nowPlaying: movieNowPlayingListsReducer,
// //   popularMovies: moviePopularListsReducer,
// //   topRatedMovies: movieTopRatedListsReducer,
// //   upcomingMovies: movieUpcomingListsReducer,
// //   popularTV: tvPopularListsReducer,
// //   topRatedTV: tvTopRatedListsReducer,
// //   airingTodayTV: tvAiringTodayListsReducer,
// //   onTv: tvOnTvListsReducer,
//   genres: genresListsMoviesFeature.reducer,
//   movieLists: movieListsFeature.reducer,
//   tvLists: tvListsFeature.reducer,
// };

// export const MoviesEffects1 = [
//     // MoviePopularListsEffects,
//     // MovieNowPlayingListsEffects,
//     // MovieTopRatedListsEffects,
//     // MovieUpcomingListsEffects,
//     // TvPopularListsEffects,
//     // TvAiringTodayListsEffects,
//     // TvOnTvListsEffects,
//     // TvTopRatedListsEffects,
//     MovieGenresListsEffects,
//     MovieListsEffects,
//     TvListsEffects,
//   ];
  

  