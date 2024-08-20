import { Movie } from "../../../models/api/MovieResponse";
import { PaginationResponse } from "../../../models/api/PaginationResponse";

export interface MovieTopRatedListsState {
    movies: PaginationResponse<Movie[]>;
    error: string | null;
    loading: boolean;
}
export const initialState: MovieTopRatedListsState={
    movies: { page: 0, results: [], total_pages: 0, total_results: 0 },
    error: null,
    loading: false,
};