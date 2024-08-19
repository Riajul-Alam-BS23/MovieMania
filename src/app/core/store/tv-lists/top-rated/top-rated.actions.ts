import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { ListsType } from '../../../models/types/DetailsType';

export const loadTopRatedListsTv = createAction(
    '[Top Rated Tv Lists] load Top Rated Tv Lists Movies',
    props<{movies:ListsType }>()
);

export const loadTopRatedListsTvSuccess = createAction(
    '[Top Rated Tv Lists] load Top Rated Tv Lists Movies Success',
    props<{ movies: Movie[] }>()
);

export const loadTopRatedListsTvFailure = createAction(
    '[Top Rated Tv Lists] load Top Rated Tv Lists Movies Failure',
    props<{ error: string }>()
);

