import { createFeature, createReducer, on } from "@ngrx/store";
import { Genre } from "../../../models/api/MovieDetailsResponse";
import { GenresListsMoviesActions } from "./genres.actions";

export const MOVIE_GENRES_LISTS_STATE_NAME = 'movieGenresLists';

export interface MovieGenresListsState {
    genres: Genre[];
    error: string | null;
    loading: boolean;
}

export const initialState: MovieGenresListsState = {
    genres: [],
    error: null,
    loading: false,
};

export const genresListsMoviesFeature = createFeature({
  name: MOVIE_GENRES_LISTS_STATE_NAME,
  reducer: createReducer(
    initialState,
    on(GenresListsMoviesActions.load, state => ({
      ...state,
      loading: true
    })),
    on(GenresListsMoviesActions.loadSuccess, (state, { genres }) => ({
      ...state,
      genres:genres['genres'],
      loading: false
    })),
    on(GenresListsMoviesActions.loadFailure, (state, { error }) => ({
      ...state,
      error,
      loading: false
    }))
  ),
});

// Selectors
export const {
  selectGenres,
  selectLoading,
  selectError
} = genresListsMoviesFeature;
