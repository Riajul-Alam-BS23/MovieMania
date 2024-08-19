import { Movie } from "../../../models/api/MovieResponse";

export interface MoviePopularListsState {
    movies: Movie[];
    error: string | null;
    loading: boolean;
}
export const initialState: MoviePopularListsState={
    movies: [],
    error: null,
    loading: false,
};