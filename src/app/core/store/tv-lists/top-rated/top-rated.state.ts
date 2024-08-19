import { Movie } from "../../../models/api/MovieResponse";

export interface TvTopRatedListsState {
    movies: Movie[];
    error: string | null;
    loading: boolean;
}
export const initialState: TvTopRatedListsState={
    movies: [],
    error: null,
    loading: false,
};