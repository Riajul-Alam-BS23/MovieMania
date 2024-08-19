import { Movie } from "../../../models/api/MovieResponse";

export interface MovieUpcomingListsState {
    movies: Movie[];
    error: string | null;
    loading: boolean;
}
export const initialState: MovieUpcomingListsState={
    movies: [],
    error: null,
    loading: false,
};