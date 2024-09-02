import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { ListsType } from '../../../models/types/DetailsType';
import { PaginationResponse } from '../../../models/api/PaginationResponse';

export const loadPopularListsPeoples = createAction(
    '[Popular Lists] Load Popular Lists Peoples',
    props<{movies:ListsType }>()
);

export const loadPopularListsPeoplesSuccess = createAction(
    '[Popular Lists] Load Popular Lists Peoples Success',
    props<{ movies:PaginationResponse<Movie[]> }>()
);

export const loadPopularListsPeoplesFailure = createAction(
    '[Popular Lists] Load Popular Lists Peoples Failure',
    props<{ error: string }>()
);

