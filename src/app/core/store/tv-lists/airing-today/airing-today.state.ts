import { Movie } from "../../../models/api/MovieResponse";

export interface TvAiringTodayListsState {
    movies: Movie[];
    error: string | null;
    loading: boolean;
}
export const initialState: TvAiringTodayListsState={
    movies: [],
    error: null,
    loading: false,
};