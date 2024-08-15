import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { DetailsType } from '../../../models/types/DetailsType';

export const loadRecommendationsMovies = createAction(
    '[Recommendations] Load Recommendations Movies',
    props<{movies:DetailsType }>()
);

export const loadRecommendationsMoviesSuccess = createAction(
    '[Recommendations] Load Recommendations Movies Success',
    props<{ movies: Movie[] }>()
);

export const loadRecommendationsMoviesFailure = createAction(
    '[Recommendations] Load Recommendations Movies Failure',
    props<{ error: string }>()
);

