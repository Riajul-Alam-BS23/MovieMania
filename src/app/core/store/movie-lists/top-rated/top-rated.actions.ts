import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { Type } from '../../../models/types/DetailsType';
import { PaginationResponse } from '../../../models/api/PaginationResponse';

export const loadTopRatedListsMovies = createAction(
    '[Top Rated Lists] load Top Rated Lists Movies',
    props<{movies:Type }>()
);

export const loadTopRatedListsMoviesSuccess = createAction(
    '[Top Rated Lists] load Top Rated Lists Movies Success',
    props<{ movies: PaginationResponse<Movie[]> }>()
);

export const loadTopRatedListsMoviesFailure = createAction(
    '[Top Rated Lists] load Top Rated Lists Movies Failure',
    props<{ error: string }>()
);

