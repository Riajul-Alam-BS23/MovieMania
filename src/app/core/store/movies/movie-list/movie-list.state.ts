import { createFeature, createReducer, on } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { MovieListsActions } from './movie-list.actions';

export interface MovieListsState {
    movies: PaginationResponse<Movie[]>;
    error: string | null;
    loading: boolean;
}

export const initialState: MovieListsState = {
    movies: { page: 0, results: [], total_pages: 0, total_results: 0 },
    error: null,
    loading: false,
};
export const MOVIE_LISTS_STATE_NAME = 'movieLists';
export const movieListsFeature = createFeature({
    name: MOVIE_LISTS_STATE_NAME,
    reducer: createReducer(
        initialState,
        on(MovieListsActions.loadListsMovies, state => ({
            ...state,
            loading: true,
        })),
        on(MovieListsActions.loadListsMoviesSuccess, (state, { movies }) => ({
            ...state,
            movies: {
                ...state.movies,
                page: movies.page,
                results:(movies.page>=2? [...state.movies.results,...movies.results]: movies.results),
                total_pages: movies.total_pages,
                total_results: movies.total_results,
            },
            loading: false,
        })),
        on(MovieListsActions.loadListsMoviesFailure, (state, { error }) => ({
            ...state,
            error,
            loading: false,
        }))
    )
});

export const {
    selectMovies,
    selectError,
    selectLoading,
} = movieListsFeature;
