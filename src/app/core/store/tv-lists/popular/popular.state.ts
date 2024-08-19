import { Movie } from "../../../models/api/MovieResponse";

export interface TvPopularListsState {
    movies: Movie[];
    error: string | null;
    loading: boolean;
}
export const initialState: TvPopularListsState={
    movies: [],
    error: null,
    loading: false,
};