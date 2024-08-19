import { Movie } from "../../../models/api/MovieResponse";

export interface MovieTopRatedListsState {
    movies: Movie[];
    error: string | null;
    loading: boolean;
}
export const initialState: MovieTopRatedListsState={
    movies: [],
    error: null,
    loading: false,
};