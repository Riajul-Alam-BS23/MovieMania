import { Movie } from "../../models/api/MovieResponse";
import { PopularMovieEffects } from "./popular/popular.effects";
import { popularMovieReducer } from "./popular/popular.reducer";
import { Popular_MOVIE_STATE_NAME } from "./popular/popular.selectors";
import { PopularMovieState } from "./popular/popular.state";
import { TrendingMovieEffects } from "./trending/trending.effects";
import { trendingMovieReducer } from "./trending/trending.reducer";
import { Trending_MOVIE_STATE_NAME } from "./trending/trending.selectors";
import { TrendingMovieState } from "./trending/trending.state";

export interface HomeState {
    [Trending_MOVIE_STATE_NAME]: TrendingMovieState;
    [Popular_MOVIE_STATE_NAME]: PopularMovieState;
}

export const homeReducer ={
    [Trending_MOVIE_STATE_NAME]: trendingMovieReducer,
    [Popular_MOVIE_STATE_NAME]: popularMovieReducer
};

export const HomeEffects=[PopularMovieEffects, TrendingMovieEffects];



