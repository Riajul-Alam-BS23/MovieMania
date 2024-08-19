import { Movie } from "../../../models/api/MovieResponse";

export interface TvOnTvListsState {
    movies: Movie[];
    error: string | null;
    loading: boolean;
}
export const initialState: TvOnTvListsState={
    movies: [],
    error: null,
    loading: false,
};