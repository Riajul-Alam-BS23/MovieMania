import { Movie } from "../../../models/api/MovieResponse";

export interface MovieNowPlayingListsState {
    movies: Movie[];
    error: string | null;
    loading: boolean;
}
export const initialState: MovieNowPlayingListsState={
    movies: [],
    error: null,
    loading: false,
};