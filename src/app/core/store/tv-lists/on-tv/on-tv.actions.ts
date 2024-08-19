import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { ListsType } from '../../../models/types/DetailsType';

export const loadOnTvListsTv = createAction(
    '[TvOnTv Lists] Load TvOnTv Lists Tv',
    props<{movies:ListsType }>()
);

export const loadOnTvListsTvSuccess = createAction(
    '[TvOnTv Lists] Load TvOnTv Lists Tv Success',
    props<{ movies: Movie[] }>()
);

export const loadOnTvListsTvFailure = createAction(
    '[TvOnTv Lists] Load TvOnTv Lists Tv Failure',
    props<{ error: string }>()
);

