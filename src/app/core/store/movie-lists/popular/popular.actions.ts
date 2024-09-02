import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { Type } from '../../../models/types/DetailsType';
import { PaginationResponse } from '../../../models/api/PaginationResponse';

export const loadPopularListsMovies = createAction(
    '[Popular Lists] Load Popular Lists Movies',
    props<{movies:Type }>()
);

export const loadPopularListsMoviesSuccess = createAction(
    '[Popular Lists] Load Popular Lists Movies Success',
    props<{ movies:PaginationResponse<Movie[]> }>()
);

export const loadPopularListsMoviesFailure = createAction(
    '[Popular Lists] Load Popular Lists Movies Failure',
    props<{ error: string }>()
);

