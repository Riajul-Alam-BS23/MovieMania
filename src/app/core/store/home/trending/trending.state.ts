import { Movie } from "../../../models/api/MovieResponse";

export interface TrendingMovieState {
    movies: Movie[];
    error: string | null;
    loading: boolean;
}
export const initialState: TrendingMovieState={
    movies: [],
    error: null,
    loading: false,
};