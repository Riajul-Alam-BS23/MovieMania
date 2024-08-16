import { Movie } from "../../../models/api/MovieResponse";

export interface MovieListsState {
    movies: Movie[];
    error: string | null;
    loading: boolean;
}
export const initialState: MovieListsState={
    movies: [],
    error: null,
    loading: false,
};