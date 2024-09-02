import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { Type } from '../../../models/types/DetailsType';
import { PaginationResponse } from '../../../models/api/PaginationResponse';

export const loadOnTvListsTv = createAction(
    '[TvOnTv Lists] Load TvOnTv Lists Tv',
    props<{movies:Type }>()
);

export const loadOnTvListsTvSuccess = createAction(
    '[TvOnTv Lists] Load TvOnTv Lists Tv Success',
    props<{ movies: PaginationResponse<Movie[]> }>()
);

export const loadOnTvListsTvFailure = createAction(
    '[TvOnTv Lists] Load TvOnTv Lists Tv Failure',
    props<{ error: string }>()
);

