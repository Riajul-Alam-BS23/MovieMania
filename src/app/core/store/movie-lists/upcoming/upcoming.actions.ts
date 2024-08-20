import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { ListsType } from '../../../models/types/DetailsType';
import { PaginationResponse } from '../../../models/api/PaginationResponse';

export const loadUpcomingListsMovies = createAction(
    '[Upcoming Lists] Load Upcoming Lists Movies',
    props<{movies:ListsType }>()
);

export const loadUpcomingListsMoviesSuccess = createAction(
    '[Upcoming Lists] Load Upcoming Lists Movies Success',
    props<{ movies: PaginationResponse<Movie[]> }>()
);

export const loadUpcomingListsMoviesFailure = createAction(
    '[Upcoming Lists] Load Upcoming Lists Movies Failure',
    props<{ error: string }>()
);

