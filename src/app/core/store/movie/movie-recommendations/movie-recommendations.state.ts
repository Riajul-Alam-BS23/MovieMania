import { Movie } from "../../../models/api/MovieResponse";

export interface MovieRecommendationsState {
    movies: Movie[];
    error: string | null;
    loading: boolean;
}
export const initialState: MovieRecommendationsState={
    movies: [],
    error: null,
    loading: false,
};