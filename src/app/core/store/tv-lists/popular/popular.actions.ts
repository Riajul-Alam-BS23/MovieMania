import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { ListsType } from '../../../models/types/DetailsType';
import { PaginationResponse } from '../../../models/api/PaginationResponse';

export const loadPopularListsTv = createAction(
    '[Popular Lists Tv] Load Popular Lists Tv',
    props<{movies:ListsType }>()
);

export const loadPopularListsTvSuccess = createAction(
    '[Popular Lists Tv] Load Popular Lists Tv Success',
    props<{ movies: PaginationResponse<Movie[]> }>()
);

export const loadPopularListsTvFailure = createAction(
    '[Popular Lists Tv] Load Popular Lists Tv Failure',
    props<{ error: string }>()
);

