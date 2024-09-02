import { createFeature, createReducer, on } from "@ngrx/store";
import { Genre } from "../../../models/api/MovieDetailsResponse";
import { GenresListsTvsActions } from "./genres.actions";

export const TV_GENRES_LISTS_STATE_NAME = 'TvGenresLists';

export interface TvGenresListsState {
    genres: Genre[];
    error: string | null;
    loading: boolean;
}

export const initialState: TvGenresListsState = {
    genres: [],
    error: null,
    loading: false,
};

export const genresListsTvsFeature = createFeature({
  name: TV_GENRES_LISTS_STATE_NAME,
  reducer: createReducer(
    initialState,
    on(GenresListsTvsActions.load, state => ({
      ...state,
      loading: true
    })),
    on(GenresListsTvsActions.loadSuccess, (state, { genres }) => ({
      ...state,
      genres:genres['genres'],
      loading: false
    })),
    on(GenresListsTvsActions.loadFailure, (state, { error }) => ({
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
} = genresListsTvsFeature;
