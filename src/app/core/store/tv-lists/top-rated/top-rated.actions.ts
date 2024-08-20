import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { ListsType } from '../../../models/types/DetailsType';
import { PaginationResponse } from '../../../models/api/PaginationResponse';

export const loadTopRatedListsTv = createAction(
    '[Top Rated Tv Lists] load Top Rated Tv Lists Movies',
    props<{movies:ListsType }>()
);

export const loadTopRatedListsTvSuccess = createAction(
    '[Top Rated Tv Lists] load Top Rated Tv Lists Movies Success',
    props<{ movies: PaginationResponse<Movie[]> }>()
);

export const loadTopRatedListsTvFailure = createAction(
    '[Top Rated Tv Lists] load Top Rated Tv Lists Movies Failure',
    props<{ error: string }>()
);

