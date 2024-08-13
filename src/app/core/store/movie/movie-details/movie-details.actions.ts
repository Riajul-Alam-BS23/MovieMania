

import { createAction, props } from '@ngrx/store';

export const loadMovieDetails = createAction(
  '[Movie Details] Load Movie Details',
  props<{ movieId: number }>()
);

export const loadMovieDetailsSuccess = createAction(
  '[Movie Details] Load Movie Details Success',
  props<{ movie: any }>() // Replace `any` with your movie model
);

export const loadMovieDetailsFailure = createAction(
  '[Movie Details] Load Movie Details Failure',
  props<{ error: string }>()
);
