import { Movie } from "../../../models/api/MovieResponse";

export interface PopularMovieState {
    movies: Movie[];
    error: string | null;
    loading: boolean;
}
export const initialState: PopularMovieState={
    movies: [],
    error: null,
    loading: false,
};