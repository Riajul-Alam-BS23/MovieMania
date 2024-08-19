import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { ListsType } from '../../../models/types/DetailsType';

export const loadPopularListsMovies = createAction(
    '[Popular Lists] Load Popular Lists Movies',
    props<{movies:ListsType }>()
);

export const loadPopularListsMoviesSuccess = createAction(
    '[Popular Lists] Load Popular Lists Movies Success',
    props<{ movies: Movie[] }>()
);

export const loadPopularListsMoviesFailure = createAction(
    '[Popular Lists] Load Popular Lists Movies Failure',
    props<{ error: string }>()
);

