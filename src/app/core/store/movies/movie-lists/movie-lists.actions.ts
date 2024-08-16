import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { ListsType } from '../../../models/types/DetailsType';

export const loadListsMovies = createAction(
    '[Lists] Load Lists Movies',
    props<{movies:ListsType }>()
);

export const loadListsMoviesSuccess = createAction(
    '[Lists] Load Lists Movies Success',
    props<{ movies: Movie[] }>()
);

export const loadListsMoviesFailure = createAction(
    '[Lists] Load Lists Movies Failure',
    props<{ error: string }>()
);

